
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Demo from "@/components/Demo";
import { useEffect } from "react";

const Index = () => {
  // Add page load animations
  useEffect(() => {
    // Add a class to the body when the page is loaded
    document.body.classList.add("page-loaded");
    
    // Clean up function
    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
      <Demo />
    </MainLayout>
  );
};

export default Index;
