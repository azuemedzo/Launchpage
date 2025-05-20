import React from "react";
import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/featuresSection";



export default function Page () {
  return (
        <main className="flex flex-col items-center justify-center p-20 max-md:p-5 gap-30 md:gap-10">
           
           <HeroSection />      
           <FeaturesSection />
        </main>
  );
}
