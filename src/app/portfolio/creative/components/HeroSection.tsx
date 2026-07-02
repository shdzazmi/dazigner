"use client";

import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const el = heroRef.current;
            if (!el) return;
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 20;
            const y = (e.clientY / innerHeight - 0.5) * 12;
            const floaters = el.querySelectorAll<HTMLElement>(".hero-floater");
            floaters.forEach((f, i) => {
                const factor = (i + 1) * 0.4;
                f.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen pt-20 grid-bg overflow-hidden noise-overlay"
            style={{
                backgroundSize: "60px 60px",
                backgroundImage:
                    "linear-gradient(rgba(26,26,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.06) 1px, transparent 1px)"
            }}>

            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-[calc(50%-2px)] top-0 bottom-0 w-[1px] bg-primary/8" />
                <div className="absolute right-[20%] top-0 bottom-0 w-[1px] bg-primary/8" />
            </div>

            <div
                className="absolute top-0 right-0 w-[35%] h-full bg-accent/12 border-l-4 border-primary/20 pointer-events-none z-0"
                style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }} />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-center min-h-screen">
                <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center pt-16 pb-20">
                    <div>
                        <div
                            className={`section-label mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "100ms" }}>
                            Available for Work — 2026
                        </div>

                        <h1
                            className={`font-display text-hero leading-[0.88] font-black text-primary mb-6 transition-all duration-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                            style={{
                                fontFamily: "DM Sans, sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(64px, 9.5vw, 118px)",
                                lineHeight: "0.88",
                                letterSpacing: "-0.03em",
                                transitionDelay: "200ms"
                            }}>
                            <span className="underline-accent relative inline-block">
                                DAZIGNER
                            </span>
                            <br />
                            <span className="text-accent" style={{ WebkitTextStroke: "3px #1A1A1A" }}>
                                STUDIO.
                            </span>
                        </h1>

                        <p
                            className={`font-body text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                transitionDelay: "350ms"
                            }}>
                            Hi! I’m Shahdaz, a creative designer. I do social media graphics,
                            video editing, and visual content that stops the scroll.
                            From Instagram carousels to Reels & YouTube.
                            I craft content that looks sharp and tells your story.
                        </p>

                        <div
                            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: "450ms" }}>

                            <button
                                onClick={() => {
                                    const el = document.querySelector("#work");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="neo-btn neo-btn-primary text-sm">
                                See My Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    const el = document.querySelector("#contact");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="neo-btn neo-btn-secondary text-sm">
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    <div
                        className={`hidden lg:block relative w-[420px] transition-all duration-1000 ${loaded ? "opacity-100 translate-x-0" : "opacity-100 translate-x-12"}`}
                        style={{ transitionDelay: "300ms" }}>

                        <div className="relative neo-border-thick neo-shadow-lg bg-primary">
                            <div className="w-full h-[520px] overflow-hidden">
                                <AppImage
                                    src="/assets/images/portrait-photo.jpg"
                                    alt="Shadaz creative designer portrait photo"
                                    width={420}
                                    height={520}
                                    className="w-full h-full object-cover project-img"
                                    priority />
                            </div>
                            <div className="absolute -top-4 -right-4 bg-accent border-3 border-primary px-4 py-2 neo-shadow">
                                <span
                                    className="font-mono-neo text-xs font-bold uppercase tracking-widest"
                                    style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                    Open for Projects
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 px-5 flex items-center justify-between">
                                <span
                                    className="font-display font-black text-secondary text-sm uppercase tracking-widest"
                                    style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>
                                    Shahdaz Azmi Nuzband
                                </span>
                                <span
                                    className="font-mono-neo text-xs text-accent"
                                    style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                    creative designer
                                </span>
                            </div>
                        </div>

                        <div className="hero-floater stat-card -left-16 top-16 w-48 transition-transform duration-300">
                            <div
                                className="font-mono-neo text-xs text-muted uppercase tracking-widest mb-1"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                Latest edit
                            </div>
                            <div
                                className="font-display font-black text-primary text-sm"
                                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}>
                                Social Media Content
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent border-2 border-primary block" />
                                <span className="font-mono-neo text-xs text-muted" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                    Delivered May 2026
                                </span>
                            </div>
                        </div>

                        <div
                            className="hero-floater stat-card -right-10 bottom-24 w-55 transition-transform duration-300"
                            style={{ animationDelay: "-2s", animationDuration: "5s" }}>
                            <div
                                className="font-mono-neo text-xs text-muted uppercase tracking-widest mb-1"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                Response time
                            </div>
                            <div
                                className="font-display font-black text-primary text-2xl"
                                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                                &lt; 24h
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span
                        className="font-mono-neo text-xs text-muted uppercase tracking-widest"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        Scroll
                    </span>
                    <div className="w-[2px] h-8 bg-primary/30" />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="3">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
