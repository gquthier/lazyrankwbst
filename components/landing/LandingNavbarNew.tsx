'use client';

import { LazyRankLogo } from '@/components/branding/LazyRankLogo';

const APP_URL = 'https://app.lazyrank.io';

export function LandingNavbarNew() {
  return (
    <nav className="absolute top-0 w-full z-40 pt-6 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <LazyRankLogo size="md" variant="default" showText={true} />
        <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-100 shadow-sm">
          <a href="#features" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
            Fonctionnalités
          </a>
          <a href="#how" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
            Comment ça marche
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
            Tarifs
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href={APP_URL}
            className="text-sm font-medium hover:opacity-70 transition-opacity text-gray-900"
          >
            Connexion
          </a>
          <a
            href={APP_URL}
            className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
          >
            Essai gratuit
          </a>
        </div>
      </div>
    </nav>
  );
}
