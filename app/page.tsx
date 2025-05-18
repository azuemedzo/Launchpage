import React from "react";
import Header from "@/components/header"
import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/featuresSection";
import Home from "@/components/HomeSection";
import Footer from "@/components/footer";



export default function Page () {
  return (
        <main className="flex flex-col items-center justify-center p-20 max-md:p-5 gap-30 md:gap-10">
           <Header />
           <HeroSection />
           <Home />
           <FeaturesSection />
           <Footer />
        </main>
  );
}
