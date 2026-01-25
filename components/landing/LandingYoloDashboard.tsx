'use client';

import { Search, Brain, Rocket, Sparkles, ArrowRight } from 'lucide-react';

export function LandingYoloDashboard() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-[2rem] p-1 shadow-2xl overflow-hidden relative group">
          {/* Abstract Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-[100px] group-hover:opacity-30 transition-opacity duration-700"></div>

          <div className="bg-gray-900 rounded-[1.8rem] border border-gray-800 overflow-hidden relative">
            {/* Dashboard Header */}
            <div className="h-12 border-b border-gray-800 flex items-center px-6 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="ml-4 px-3 py-1 bg-gray-800 rounded-md text-xs text-gray-400 font-mono">yolo-mode.tsx — Active</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 md:p-12 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 border border-white/5 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>YOLO Mode Activated</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Laissez l'IA prendre le volant.</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                Configurez vos préférences une seule fois. Activez le mode YOLO. Regardez votre blog se remplir automatiquement d'articles optimisés chaque semaine.
              </p>

              {/* Visual Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {/* Step 1 */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors text-left">
                  <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-4 text-xl">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Analyse</h3>
                  <p className="text-xs text-gray-500">Scan complet de votre site et concurrents.</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center text-gray-600">
                  <ArrowRight className="h-6 w-6" />
                </div>
                {/* Step 2 */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors text-left">
                  <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-4 text-xl">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Idéation</h3>
                  <p className="text-xs text-gray-500">Génération de sujets à fort potentiel.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors text-left relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
                  <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mb-4 text-xl relative z-10">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 relative z-10">Publication</h3>
                  <p className="text-xs text-gray-500 relative z-10">Rédaction et push vers Ghost/CMS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
