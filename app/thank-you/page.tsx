'use client';

import { LazyRankLogo } from '@/components/branding/LazyRankLogo';
import { CheckCircle2, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="inline-block">
            <LazyRankLogo size="md" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon with Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative bg-green-500 rounded-full p-6 shadow-xl">
                <CheckCircle2 className="h-16 w-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-gray-900">
            Merci ! 🎉<br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Votre appel est confirmé
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Vous allez recevoir un email de confirmation avec tous les détails de notre rendez-vous.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <Calendar className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Vérifiez votre email</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Vous recevrez les détails du rendez-vous dans quelques instants
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <Sparkles className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Préparez vos questions</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Notez vos objectifs SEO pour optimiser notre échange
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">En attendant notre appel...</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Découvrez comment LazyRank peut automatiser votre stratégie de contenu SEO et générer du trafic qualifié sans effort.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <span>Retour à l'accueil</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto pt-8 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-black mb-1">500+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Articles générés</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black mb-1">98%</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black mb-1">24/7</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Automatisé</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Des questions ? Contactez-nous à{' '}
            <a href="mailto:contact@lazyrank.io" className="text-black font-medium hover:underline">
              contact@lazyrank.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
