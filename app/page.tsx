import React from "react";
import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/featuresSection";
import Pricing from "@/components/pricing";
import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";



export default function Page () {
  return (
        <main className="flex flex-col items-center justify-center p-20 max-md:p-5 gap-30 md:gap-10">
           
           <HeroSection />      
           <FeaturesSection />
           <Footer />
           <steps />
           <pricing />
           <testimonials/>
           <faq/>
        </main>
  );
}
