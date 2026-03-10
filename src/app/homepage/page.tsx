"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProjectsSection />
        <AboutSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}