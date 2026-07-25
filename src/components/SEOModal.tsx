import React, { useState } from 'react';
import { X, Code, Globe, FileText, Check, Copy } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface SEOModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOModal: React.FC<SEOModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schema' | 'robots' | 'sitemap' | 'og'>('schema');

  if (!isOpen) return null;

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': BRAND_INFO.name,
    'description': BRAND_INFO.description,
    'url': 'https://gadapfarmhouses.com',
    'logo': BRAND_INFO.logoUrl,
    'image': BRAND_INFO.logoUrl,
    'telephone': BRAND_INFO.phone,
    'email': BRAND_INFO.email,
    'priceRange': 'PKR 22000 - PKR 110000',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Gadap Town, Malir',
      'addressRegion': 'Karachi, Sindh',
      'addressCountry': 'Pakistan'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.0112',
      'longitude': '67.2144'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'amenityFeature': [
      { '@type': 'LocationFeatureSpecification', 'name': 'Filtered Swimming Pool', 'value': true },
      { '@type': 'LocationFeatureSpecification', 'name': 'Standby Power Generator', 'value': true },
      { '@type': 'LocationFeatureSpecification', 'name': 'Brick BBQ Grill Pit', 'value': true },
      { '@type': 'LocationFeatureSpecification', 'name': 'Floodlit Cricket Ground', 'value': true }
    ]
  };

  const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://gadapfarmhouses.com/sitemap.xml
Host: https://gadapfarmhouses.com`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gadapfarmhouses.com/</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gadapfarmhouses.com/farmhouses</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gadapfarmhouses.com/facilities</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://gadapfarmhouses.com/events</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://gadapfarmhouses.com/packages</loc>
    <lastmod>2026-07-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const ogTags = `<title>Gadap Farmhouses Karachi | Luxury Swimming Pool & Event Booking</title>
<meta name="description" content="Book premium farmhouses with swimming pools, BBQ grills, cricket grounds, and luxury lawns in Gadap Town, Karachi. Managed by Hammad Ghaffar. Call +92 334 3705720." />
<link rel="canonical" href="https://gadapfarmhouses.com/" />
<meta property="og:type" content="business.business" />
<meta property="og:title" content="Gadap Farmhouses | Crafting Golden Moments" />
<meta property="og:description" content="5-Star resort style farmhouses in Gadap Town, Karachi for family picnics, weddings, and BBQ nights." />
<meta property="og:image" content="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@GadapFarmhouses" />`;

  const getContentToCopy = () => {
    if (activeTab === 'schema') return JSON.stringify(jsonLdSchema, null, 2);
    if (activeTab === 'robots') return robotsTxt;
    if (activeTab === 'sitemap') return sitemapXml;
    return ogTags;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContentToCopy());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-neutral-900 border border-amber-500/30 overflow-hidden shadow-2xl text-white">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-neutral-950 via-amber-950/40 to-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Technical SEO & Schema Inspector</span>
            <h3 className="font-serif font-bold text-xl text-white">Gadap Farmhouses SEO Architecture</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-neutral-800 bg-neutral-950 px-4 pt-2 gap-2 text-xs font-semibold">
          {[
            { id: 'schema', label: 'JSON-LD Schema', icon: Code },
            { id: 'og', label: 'OpenGraph & Meta', icon: Globe },
            { id: 'sitemap', label: 'sitemap.xml', icon: FileText },
            { id: 'robots', label: 'robots.txt', icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-neutral-900 text-amber-400 border-t border-x border-amber-500/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Code Content Box */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto font-mono text-xs">
          <div className="flex items-center justify-between bg-neutral-950 p-3 rounded-xl border border-neutral-800">
            <span className="text-neutral-400 font-sans text-xs">
              Optimized for 90+ Lighthouse Score & Google Local Search
            </span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 flex items-center space-x-1.5 font-sans text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Code!' : 'Copy Code'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-amber-300/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {getContentToCopy()}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
