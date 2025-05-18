"use client";
import React from "react";
import { FileEdit } from "lucide-react";

const features = [
  {
    title: "Installation rapide",
    description: "Mettez votre landing page en ligne en quelques minutes grâce à nos modèles faciles à utiliser.",
  },
  {
    title: "Personnalisation facile",
    description: "Adaptez chaque section à votre marque sans effort.",
  },
  {
    title: "Responsive design",
    description: "Votre page s’affiche parfaitement sur tous les appareils.",
  },
  {
    title: "Optimisé SEO",
    description: "Améliorez votre visibilité sur les moteurs de recherche.",
  },
  {
    title: "Support technique",
    description: "Notre équipe vous accompagne à chaque étape.",
  },
  {
    title: "Mises à jour gratuites",
    description: "Bénéficiez des dernières fonctionnalités sans frais supplémentaires.",
  },
];

export default function FeaturesSection() {
  return (
    // Section principale contenant deux colonnes à partir du breakpoint "md"
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Pourquoi choisir notre template LaunchPage ?
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Découvrez les avantages de notre template Next.js pour lancer votre page rapidement et efficacement.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow text-center flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full mb-4">
              <FileEdit size={24} />
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}