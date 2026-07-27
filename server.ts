import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google GenAI client server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `
You are the AI Concierge and Smart Recommendation Agent for "Gadap Farmhouses" in Karachi, managed under Hammad Ghaffar's personal supervision.
Your mission is to help users find the perfect luxury farmhouse in Gadap Town, Karachi based on their group size, budget, event type, or desired amenities.

Gadap Farmhouses Portfolio Overview:
1. Emerald Haven Farmhouse (PKR 45,000 / day)
   - Capacity: Up to 250 Guests
   - Key Features: Executive Air-Conditioned Villa (3 Bedrooms), Deep & Shallow Kids Pool with Night Waterfall, Floodlit Turf Cricket Pitch, Snooker Table, Expansive Lawn, Standby Generator.
   - Ideal for: Large family reunions, corporate cricket matches, overnight stays.

2. Palm Riviera Luxury Villa (PKR 35,000 / day)
   - Capacity: Up to 150 Guests
   - Key Features: Surrounded by tall dates & palm trees, Crystal Clean Pool with Night Ambient Lights, Shaded Gazebo Lounges, Built-in Brick BBQ Pit, 3 AC Bedrooms, Gaming Arcade.
   - Ideal for: Weekend family getaways, friend circle pool parties, BBQ nights.

3. Royal Palms Grand Estate (PKR 95,000 / day)
   - Capacity: Up to 500 Guests
   - Key Features: Royal Wedding Lawns, Grand Covered AC Banquet Hall, Dual Swimming Pools (Adults & Toddlers), 100KVA Heavy Power Generator, Bride/Groom Dressing Suites.
   - Ideal for: Weddings, Mehndi & Mayun ceremonies, corporate annual dinners, grand shoots.

4. Paradise Cove Event Estate (PKR 60,000 / day)
   - Capacity: Up to 350 Guests
   - Key Features: Waterfall Swimming Pool, Indoor AC Gaming Lounge (Foosball, Snooker, Table Tennis), Turf Cricket Pitch, Covered Dining Area.
   - Ideal for: Company outings, large birthday bashes, family picnics.

General Booking & Policy Information:
- Location: Gadap Town, Malir, Karachi (30-40 mins from main city via M-9 Motorway).
- Owner Supervision: Managed directly under Hammad Ghaffar's supervision for 100% privacy and verified hygiene.
- Customer Contact: Phone & WhatsApp (+92 334 3705720).
- Timings: Day Pass (10 AM to 10 PM) or Overnight (24 Hours).

Guidelines for your response:
- Be concise, friendly, helpful, and polite.
- Directly recommend 1 or 2 matching farmhouses when users state group size, budget, or event.
- Mention pricing and key amenities accurately.
- Invite users to click "Reserve A Farmhouse" or contact WhatsApp (+92 334 3705720) for date confirmation.
- Keep paragraphs compact and clean. Use bullet points when listing features.
`;

app.post('/api/ai/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message parameter is required' });
    }

    const contents = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const h of history) {
        contents.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }],
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const text = response.text || "I'm here to help you choose the best farmhouse in Gadap Town! Could you tell me how many guests you are planning for?";
    res.json({ reply: text });
  } catch (error: any) {
    console.error('Gemini AI API Error:', error);
    res.status(500).json({
      error: 'AI Concierge unavailable',
      details: error?.message || 'Error communicating with Gemini model',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
