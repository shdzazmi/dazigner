"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const skills = [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro",
    "Adobe After Effects", "CapCut"
];

const values = [
    {
        icon: "SparklesIcon" as const,
        label: "Scroll-Stopping Visuals",
        desc: "Designs and edits built to grab attention in the first 3 seconds."
    },
    {
        icon: "FilmIcon" as const,
        label: "Platform-Ready",
        desc: "Content optimized for Instagram, TikTok, YouTube, and more."
    },
    {
        icon: "ClockIcon" as const,
        label: "Fast Turnaround",
        desc: "Quick delivery without sacrificing quality, perfect for content calendars."
    },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );
        const els = sectionRef.current?.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-primary overflow-hidden relative">
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(245,240,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.08) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-0 border-3 border-accent">
                    <div className="reveal-left border-b-3 lg:border-b-0 lg:border-r-3 border-accent relative">
                        <div className="relative h-[400px] lg:h-full min-h-[480px] overflow-hidden">
                            <AppImage
                                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop"
                                alt="Creative workspace with design tools and social media content on screen"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw" />

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/60" />
                        </div>
                    </div>

                    <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-10">
                        <div className="reveal-up">
                            <div className="section-label mb-6" style={{ color: "#f1f1f1", opacity: 0.5 }}>
                                About Me
                            </div>
                            <h2
                                className="font-display font-black text-secondary leading-none mb-6"
                                style={{
                                    fontFamily: "DM Sans, sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(36px, 4vw, 56px)",
                                    letterSpacing: "-0.025em",
                                    lineHeight: "1"
                                }}>
                                I CREATE{" "}
                                <span className="text-accent">CONTENT</span>
                                <br />
                                THAT CONNECTS.
                            </h2>
                            <p
                                className="font-body text-secondary/70 text-base md:text-lg leading-relaxed max-w-lg"
                                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                                Based in Samarinda, Indonesia. Beyond code, I love crafting visual content —
                                from social media graphics and carousel designs to video edits for Reels,
                                TikTok, and YouTube. I help brands and creators look professional online.
                            </p>
                        </div>

                        <div className="reveal-up stagger-children flex flex-col gap-4">
                            {values.map((v) =>
                                <div
                                    key={v.label}
                                    className="reveal-up flex items-start gap-4 p-4 border-2 border-secondary/20 hover:border-accent transition-colors group">
                                    <div className="w-10 h-10 bg-accent border-2 border-secondary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                                        <Icon name={v.icon} size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <div
                                            className="font-display font-black text-secondary text-sm uppercase tracking-wide mb-1"
                                            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}>
                                            {v.label}
                                        </div>
                                        <div
                                            className="font-body text-secondary/60 text-sm leading-relaxed"
                                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                                            {v.desc}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="reveal-up" id="skills">
                            <div
                                className="font-mono-neo text-xs text-secondary/40 uppercase tracking-widest mb-4"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                Tools & Software
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) =>
                                    <span
                                        key={skill}
                                        className="skill-tag text-secondary border-secondary/30 hover:border-accent">
                                        {skill}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
