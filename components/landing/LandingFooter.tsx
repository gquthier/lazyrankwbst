'use client';

import { Twitter, Linkedin, Github } from 'lucide-react';
import { LazyRankLogo } from '@/components/branding/LazyRankLogo';

export function LandingFooter() {
  return (
    <footer className="border-t border-gray-100 pt-16 pb-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <LazyRankLogo size="sm" variant="default" showText={true} />
            </div>
            <p className="text-sm text-gray-500">
              L'outil ultime pour automatiser votre stratégie de contenu de bout en bout.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Produit</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">YOLO Mode</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Communauté</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-black transition-colors">CGU</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-400">
          <p>&copy; 2025 LazyRank. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <Twitter className="h-5 w-5 fill-current" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <Linkedin className="h-5 w-5 fill-current" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <Github className="h-5 w-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
