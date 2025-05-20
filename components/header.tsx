'use client';

import { Menu, X, Lock } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Nom */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logos/logo.svg"
            alt="Logo de l'entreprise"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold text-gray-800">Startup Landing</h1>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#FFC059]">Home</a>
          <a href="#" className="hover:text-[#FFC059]">Features</a>
          <a href="#" className="hover:text-[#FFC059]">Testimonials</a>
          <a href="#" className="hover:text-[#FFC059]">Pricing</a>
          <a href="#" className="hover:text-[#FFC059]">FAQ</a>
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-1 text-black hover:text-green-600 transition">
            <Lock size={16} />
            <span>Log in</span>
          </a>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Sign Up Now
          </button>
        </div>

        {/* Menu mobile toggle */}
        <button
          className="md:hidden text-gray-700 z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 space-y-4 z-10">
          <a href="#" className="block text-black hover:text-[#FFC059]">Home</a>
          <a href="#" className="block text-black hover:text-[#FFC059]">Features</a>
          <a href="#" className="block text-black hover:text-[#FFC059]">Testimonials</a>
          <a href="#" className="block text-black hover:text-[#FFC059]">Pricing</a>
          <a href="#" className="block text-black hover:text-[#FFC059]">FAQ</a>
          
          <a href="#" className="flex items-center gap-2 text-black hover:text-green-600 border-t pt-4 border-gray-200">
            <Lock size={16} />
            Log in
          </a>

          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Sign Up Now
          </button>
        </div>
      )}
    </header>
  );
}
