import React from 'react'



import Image from 'next/image'





// Composant principal de la section Hero (bannière d’introduction de la page)


export default function HeroSection() {


  return (


    // Section principale pleine hauteur avec fond blanc


    <section className="flex  items-center justify-center   ">
<button className='text-sm font-medium px-4 py-1 bg cyan-100 text-cyan-900 rounded-full shadow-sm'>
  Launch your landind page
</button>

      


      {/* Contenu centré avec fond blanc */}


      <div className="rounded-md min-md:w-1/3"></div>


        


        {/* Titre principal en grand et en gras */}


        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-justify ">


          Supercharge your product Launch <br />
          with <div className="text-blue-600">Easy-to-Use</div>Template 
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create a stunning landing page effortlessly with our <br />
          freetemplate, optimized for conversions
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium text-gray-800 hover:bg-teal-700 transition">
            Sign up Now
          </a>
          <a href="#" className="flex items-center justify-center border border-gray-300 px-6 py-3 bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium text-gray-800 hover:bg-gray-100 transition">
         
        <svg className="w-5 h-5 3r-2"
        fill="none"
        stroke="currentColor"
        stroke-width="2">
          <path
          stroke-linecap="round"
          stroke-linejoin="round"/>
        </svg>
        Watch Demo
        </a>
        </div>
      </section>
)
}