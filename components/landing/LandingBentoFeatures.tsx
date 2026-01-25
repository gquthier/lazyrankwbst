'use client';

import { Bot, Image, TrendingUp, GitBranch } from 'lucide-react';

export function LandingBentoFeatures() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Tout ce dont vous avez besoin pour ranker</h2>
          <p className="text-gray-500">Une suite d'outils complète, pas juste un wrapper GPT.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Large Feature 1 - Agents IA */}
          <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center text-2xl mb-6">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Agents IA Multiples</h3>
              <p className="text-gray-500">Nous n'utilisons pas un seul prompt. Une équipe d'agents spécialisés (Chercheur, Rédacteur, SEO Specialist) travaille en synergie sur chaque article.</p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Bot className="h-[150px] w-[150px]" />
            </div>
          </div>

          {/* Feature 2 - Images IA */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xl mb-4">
              <Image className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">Images IA</h3>
            <p className="text-sm text-gray-500">Génération automatique d'images de couverture pertinentes et libres de droits.</p>
          </div>

          {/* Feature 3 - SERP */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center text-xl mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">Recherche SERP</h3>
            <p className="text-sm text-gray-500">Analyse en temps réel des résultats Google pour surpasser la concurrence.</p>
          </div>

          {/* Feature 4 - Git/CMS */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center text-xl mb-4">
              <GitBranch className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2 text-gray-900">Intégration Git/CMS</h3>
            <p className="text-sm text-gray-500">Push direct vers GitHub, Ghost, WordPress ou Webflow.</p>
          </div>

          {/* Wide Feature 5 - Structure Sémantique */}
          <div className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Structure Sémantique Avancée</h3>
              <p className="text-gray-500 mb-6">Nos articles ne sont pas des blocs de texte. Ils incluent des tableaux, des listes à puces, des citations et une hiérarchie H1-H6 parfaite pour Google.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">Schema.org</span>
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">Meta Tags</span>
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">Alt Text</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-2 w-full bg-gray-200 rounded"></div>
                <div className="h-20 w-full bg-gray-200 rounded mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
