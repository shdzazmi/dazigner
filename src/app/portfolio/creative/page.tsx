"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";

export default function CreativePortfolioPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <MarqueeSection />
                <ProjectsSection />
                <AboutSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
