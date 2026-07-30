import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Bot, User, RefreshCw, MessageSquare, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AIAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  openBookingModal: (farmhouseName?: string) => void;
  darkMode?: boolean;
}

export const AIAgentModal: React.FC<AIAgentModalProps> = ({
  isOpen,
  onClose,
  openBookingModal,
  darkMode = false,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: 'Assalam-o-Alaikum! Welcome to Gadap Farmhouses AI. How can I assist you with your booking or venue inquiry today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input.trim();
    if (!textToSend || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!userText) setInput('');
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history,
        }),
      });

      const data = await res.json();
      const botReply = data.reply || data.error || 'Sorry, I am unable to connect right now.';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Failed to get AI response:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: 'I am experiencing a temporary connection issue. Please call or WhatsApp us directly at +92 334 3705720!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`w-full max-w-lg h-[80vh] max-h-[580px] rounded-3xl shadow-2xl overflow-hidden flex flex-col border ${
            darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-100' : 'bg-white border-red-100 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 via-rose-800 to-red-900 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base tracking-tight">Gadap Farmhouses AI</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex space-x-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-red-600 text-white rounded-tr-none'
                      : darkMode
                      ? 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700'
                      : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">{msg.text}</div>

                  {msg.role === 'assistant' && (
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-neutral-700 flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => {
                          onClose();
                          openBookingModal();
                        }}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow cursor-pointer"
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Reserve A Farmhouse</span>
                      </button>

                      <a
                        href="https://wa.me/923343705720?text=Hi%20Hammad,%20I%20am%20inquiring%20about%20a%20Gadap%20Farmhouse%20booking"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Owner</span>
                      </a>
                    </div>
                  )}

                  <span
                    className={`block text-[10px] mt-1.5 ${
                      msg.role === 'user' ? 'text-red-200 text-right' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex space-x-3 justify-start">
                <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div
                  className={`rounded-2xl rounded-tl-none p-3.5 text-xs ${
                    darkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-slate-100 text-slate-600'
                  } flex items-center space-x-2`}
                >
                  <RefreshCw className="w-4 h-4 animate-spin text-red-600" />
                  <span>Gadap Farmhouses AI is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className={`p-3 sm:p-4 border-t flex items-center space-x-2 ${
              darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-slate-100'
            }`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Gadap Farmhouses AI..."
              disabled={loading}
              className={`flex-1 px-4 py-3 rounded-2xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer shadow-lg shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
