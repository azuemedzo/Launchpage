import React from "react";
import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/featuresSection";
import StepsSection from "@/components/stepsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import { Badge } from "@/components/ui/badge"



export default function Page () {
  return (
        <main className="flex flex-col items-center justify-center p-20 max-md:p-5 gap-30 md:gap-10">
           
           <HeroSection />      
           <FeaturesSection />
           <StepsSection />
           <PricingSection />
           <TestimonialsSection />
           <FAQSection />
           <Badge />
        </main>
  );
}
