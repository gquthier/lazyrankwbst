'use client';

import { useState } from 'react';
import { Globe, Wand2, CheckCircle2 } from 'lucide-react';

const APP_URL = 'https://app.lazyrank.io';

export function LandingHeroNew() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!websiteUrl.trim()) {
      return;
    }

    // Clean the URL (add https:// if missing)
    let cleanUrl = websiteUrl.trim();

    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    setIsAnalyzing(true);

    // Redirect to the app with the URL
    setTimeout(() => {
      window.location.href = `${APP_URL}/analyzing?url=${encodeURIComponent(cleanUrl)}`;
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <section className="relative pt-40 pb-20 px-4 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_6s_ease-in-out_infinite]" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10" id="hero-content">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Nouveau: YOLO Mode v2.0</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900">
          Votre contenu SEO,<br />
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">en pilote automatique.</span>
        </h1>

        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Entrez votre URL. Notre IA analyse votre niche, génère des idées, rédige et publie des articles qui rankent. Sans intervention humaine.
        </p>

        {/* MAIN INPUT (The Hero Star) - Sticky */}
        <div className="max-w-2xl mx-auto mb-8 sticky bottom-4 z-50">
          <div className="relative group rounded-2xl transition-all duration-300 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl border border-gray-200 p-2 flex items-center focus-within:shadow-[0_0_0_4px_rgba(0,0,0,0.05)] focus-within:border-black">
            <div className="pl-4 text-gray-400">
              <Globe className="h-6 w-6" />
            </div>
            <input
              type="text"
              placeholder="https://votre-startup.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isAnalyzing}
              className="flex-1 bg-transparent border-none text-lg px-4 py-3 focus:outline-none placeholder:text-gray-300 text-gray-800 font-medium"
            />
            <button
              onClick={(e) => {
                console.log('🖱️ Button clicked!', e);
                handleAnalyze();
              }}
              type="button"
              disabled={isAnalyzing}
              className="bg-black text-white px-8 py-3.5 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-gray-200 flex items-center gap-2 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isAnalyzing ? (
                <>
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyse...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  <span>Analyser</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500 fill-green-500" /> Pas de carte requise
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500 fill-green-500" /> 3 articles offerts
            </span>
          </p>
        </div>

        {/* Stats/Social Proof */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-8 border-t border-gray-100">
          <div>
            <div className="text-3xl font-bold text-black mb-1">10x</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Plus rapide</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-1">100%</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Automatisé</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-1">Top 3</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Ranking Moyen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
