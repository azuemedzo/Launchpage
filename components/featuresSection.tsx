'use client';

import { PencilLine } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      {/* Badge */}
      <div className="inline-block mb-4 px-4 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">
         Features
      </div>

      {/* Titre */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Our LaunchPage Template?
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Discover the benefits of our Next.js landing page template, designed to help you launch quickly and effectively.
      </p>

      {/* Grid responsive */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-6 bg-green-50 rounded-xl text-left shadow-sm hover:shadow-md transition"
          >
            <div className="bg-green-600 text-white p-2 rounded-md mb-4">
              <PencilLine size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Fast Setup</h3>
            <p className="text-sm text-gray-600">
              Get your landing page up and running in minutes with our easy-to-use template.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
