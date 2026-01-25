'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const APP_URL = 'https://app.lazyrank.io';

export function LandingCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = APP_URL;
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto bg-black text-white rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Prêt à dominer la SERP ?</h2>
          <p className="text-gray-400 mb-8 text-lg">Rejoignez les créateurs qui utilisent l'IA pour scaler leur contenu.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-80 px-6 py-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Commencer gratuitement <ArrowRight className="h-5 w-5 stroke-[3]" />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-6">Pas de carte requise • Annulation à tout moment</p>
        </div>
      </div>
    </section>
  );
}
