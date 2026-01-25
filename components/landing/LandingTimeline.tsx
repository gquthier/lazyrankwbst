'use client';

import { Check } from 'lucide-react';

export function LandingTimeline() {
  return (
    <section id="how" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">Du lien au lead en 4 étapes</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

          {/* Step 1 */}
          <div className="relative flex md:justify-end mb-12 group">
            <div className="hidden md:block w-1/2 pr-12 text-right">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Entrez votre URL</h3>
              <p className="text-gray-500 text-sm">Nous scannons votre site pour comprendre votre ton et votre audience.</p>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-black rounded-full z-10"></div>
            <div className="md:hidden pl-20 pr-4">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Entrez votre URL</h3>
              <p className="text-gray-500 text-sm">Nous scannons votre site pour comprendre votre ton et votre audience.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex md:justify-start mb-12 group">
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-gray-200 group-hover:border-black transition-colors rounded-full z-10"></div>
            <div className="pl-20 md:pl-12 md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Génération d'Idées</h3>
              <p className="text-gray-500 text-sm">L'IA propose des sujets basés sur les opportunités de mots-clés actuelles.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex md:justify-end mb-12 group">
            <div className="hidden md:block w-1/2 pr-12 text-right">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Rédaction Automatique</h3>
              <p className="text-gray-500 text-sm">Production de contenu long-form (2000+ mots) riche et pertinent.</p>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-gray-200 group-hover:border-black transition-colors rounded-full z-10"></div>
            <div className="md:hidden pl-20 pr-4">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Rédaction Automatique</h3>
              <p className="text-gray-500 text-sm">Production de contenu long-form (2000+ mots) riche et pertinent.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex md:justify-start group">
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black rounded-full z-10 flex items-center justify-center text-white text-xs">
              <Check className="h-4 w-4 stroke-[3]" />
            </div>
            <div className="pl-20 md:pl-12 md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Publication</h3>
              <p className="text-gray-500 text-sm">Le contenu est poussé directement sur votre blog. Prêt à ranker.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
