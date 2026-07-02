"use client";

import React, { useEffect, useRef } from "react";

const services = [
    "Social Media Design",
    "Video Editing",
    "Instagram Reels",
    "YouTube Thumbnails",
    "TikTok Content",
    "Motion Graphics",
    "Brand Content",
    "Carousel Design",
];

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.15 }
        );
        const els = sectionRef?.current?.querySelectorAll(".reveal-up");
        els?.forEach((el) => observer?.observe(el));
        return () => observer?.disconnect();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="bg-primary py-24 md:py-36 relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(245,240,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div
                className="absolute top-0 left-0 w-[30%] h-full bg-accent/8 border-r-4 border-accent/20 pointer-events-none"
                style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }}
            />
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="reveal-up">
                            <div className="section-label mb-6" style={{ color: "#f1f1f1", opacity: 0.4 }}>
                                Let's Collaborate
                            </div>
                            <h2
                                className="font-display font-black text-secondary leading-none mb-6"
                                style={{
                                    fontFamily: "DM Sans, sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(48px, 6vw, 88px)",
                                    letterSpacing: "-0.03em",
                                    lineHeight: "0.9",
                                }}>
                                NEED CONTENT
                                <br />
                                THAT POPS?
                                <br />
                                <span className="text-accent">LET'S CREATE.</span>
                            </h2>
                        </div>

                        <div className="reveal-up mt-8">
                            <p
                                className="font-body text-secondary/60 text-lg leading-relaxed max-w-md"
                                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                                Whether you need a full social media kit, video edits for your brand,
                                or ongoing content support, i'm ready to help your content stand out.
                            </p>
                        </div>

                        <div className="reveal-up mt-10 flex flex-wrap gap-2">
                            {services?.map((s) => (
                                <span
                                    key={s}
                                    className="neo-tag border-secondary/30 text-secondary/70 text-xs"
                                    style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="reveal-up">
                        <div className="border-3 border-accent neo-shadow-yellow bg-secondary p-8 md:p-10">
                            <div
                                className="font-mono-neo text-xs text-muted uppercase tracking-widest mb-8"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                Connect & say hi
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <a
                                    href="https://www.linkedin.com/in/shdzazmi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neo-btn neo-btn-primary text-sm justify-center"
                                    style={{ fontFamily: "DM Sans, sans-serif" }}>
                                    LinkedIn
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M18 6L6 18M6 6h12v12" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/6285252746570"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neo-btn neo-btn-primary text-sm justify-center"
                                    style={{ fontFamily: "DM Sans, sans-serif" }}>
                                    Whatsapp
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M18 6L6 18M6 6h12v12" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/shdzazmi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neo-btn neo-btn-primary text-sm justify-center sm:col-span-2"
                                    style={{ fontFamily: "DM Sans, sans-serif" }}>
                                    Instagram
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M18 6L6 18M6 6h12v12" />
                                    </svg>
                                </a>
                            </div>

                            <div
                                className="font-mono-neo text-xs text-muted uppercase tracking-widest mb-4"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                or email directly to
                            </div>

                            <div>
                                <a
                                    href="mailto:shadazzazminuzband@gmail.com"
                                    className="nav-link font-display font-black text-sm text-primary hover:text-accent transition-colors underline-offset-2 underline"
                                    style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}>
                                    shadazzazminuzband@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
