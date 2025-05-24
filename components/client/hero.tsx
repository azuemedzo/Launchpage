'use client';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-white text-center">
      {/* Badge */}
      <div className="inline-block mb-4 px-4 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">
        Launch your Landing Page
      </div>

      {/* Titre principal */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
        Supercharge Your Product Launch <br />
        with <span className="text-blue-600">Easy-to-Use</span> Template
      </h1>

      {/* Sous-titre */}
      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
        Create a stunning landing page effortlessly with our free template, optimized for conversions.
      </p>

      {/* Boutons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition w-full sm:w-auto">
          Sign up Now
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition w-full sm:w-auto">
          <Play size={18} />
          Watch Demo
        </button>
      </div>

      {/* Bloc vidéo */}
      <div className="mt-10 w-full max-w-5xl mx-auto px-2">
        <div className="relative aspect-video bg-green-200 rounded-xl flex items-center justify-center overflow-hidden">
          <button className="bg-white rounded-full p-4 shadow-md hover:scale-105 transition">
            <Play size={28} className="text-green-600" />
          </button>
        </div>
      </div>
    </section>
  );
}


