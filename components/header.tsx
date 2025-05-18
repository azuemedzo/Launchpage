'use client';



import { Menu, X, Lock } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (

    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative z-30">


        {/* SECTION 1 : Logo de l’entreprise et Launchpage */}


      <div className="flex items-center space-x-2">



        <Image


          src="/logos/logo.svg" 


          alt="Logo de l'entreprise"


          width={100}


          height={70}


          className="h-8 w-auto"


        />


        {/* Nom de la startup, stylisé */}


        <h1 className="text-xl font-bold text-black">StartupLanding</h1>


      </div>





      {/* SECTION 2 : Liens de navigation (visibles uniquement sur écran moyen et plus grand) */}


      <nav className="hidden md:flex space-x-6 text-sm items-center text-black">


        {/* Chaque lien a un effet hover pour changer de couleur */}


        <a href="#" className="hover:text-[#FFC059]">Home</a>


        <a href="#" className="hover:text-[#FFC059]">Features</a>


        <a href="#" className="hover:text-[#FFC059]">Testimonials</a>


        <a href="#" className="hover:text-[#FFC059]">Pricing</a>
        <a href="#" className="hover:text-[#FFC059">FAQ</a>


      </nav>





      {/* SECTION 3 : Boutons d’action visibles uniquement sur desktop */}


      <div className="flex items-center hidden md:flex space-x-4 items-centergap-2 text-black px-3 py-1 rounded">

    
            <a href="#"className='hover:text-green">'>Log in</a>

          <Lock size={16} />



        {/* Bouton principal d'appel à l'action "Sign Up Now" avec fond vert */}


        <button className="bg-[#FFC059] text-white px-3 py-1 rounded">


          Sign Up Now


        </button>


      </div>





      {/* SECTION 4 : Bouton burger pour le menu mobile (visible uniquement sur petit écran) */}


      <button


        className="md:hidden text-gray-700 z-20"


        onClick={() => setIsOpen(!isOpen)} // Inverse l’état du menu à chaque clic


      >


        {/* Affiche soit l’icône "X" si le menu est ouvert, soit "Menu" s'il est fermé */}


        {isOpen ? <X size={28} /> : <Menu size={28} />}


      </button>





      {/* SECTION 5 : Menu mobile (affiché uniquement quand isOpen est true) */}


      {isOpen && (


        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-6 md:hidden z-10 text-black">


          


          {/* Liens de navigation version mobile */}


          <a href="#" className="hover:text-[#FFC059]">Home</a>


          <a href="#" className="hover:text-[#FFC059]">Features</a>


          <a href="#" className="hover:text-[#FFC059]">Testimonials</a>


          <a href="#" className="hover:text-[#FFC059]">Pricing</a>
          
          <a href="#" className="hover:text-[#FFC059]">FAQ</a>
          
          




          {/* visible ici contrairement au desktop */}


          className="flex items-center gap-2 text-black px-3 py-2 rounded w-full border border-gray-200"


            <Lock size={16} />


           <a href="#" className="hover:text-[#FFC059]">Log in</a>


          





          {/* Bouton Get Started en plein écran mobile */}


          <button className="bg-[#FFC059] text-white px-3 py-2 rounded w-full text-center">


            Sign Up Now


          </button>


        </div>


      )}


    </header>


  );


}