"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const skills = [
    "Photoshop", "Illustrator", "Figma",
    "React", "TypeScript", "Javascript",
    "Node.js", "Laravel", "Blade", "Livewire", "Vite",
    "PHP", "MySQL", "Bootstrap", "Tailwind CSS"];

const values = [
    {
        icon: "BoltIcon" as const,
        label: "Fast Delivery",
        desc: "Sprints, not marathons. Most projects ship in 2–4 weeks."
    },
    {
        icon: "CheckCircleIcon" as const,
        label: "Pixel Perfect",
        desc: "I obsess over details so you don't have to."
    },
    {
        icon: "ChatBubbleLeftRightIcon" as const,
        label: "Clear Comms",
        desc: "Daily updates, no surprises, always in your timezone."
    }];


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
            {/* Grid bg on dark */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(245,240,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.08) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-0 border-3 border-accent">
                    {/* Left: Photo + accent block */}
                    <div className="reveal-left border-b-3 lg:border-b-0 lg:border-r-3 border-accent relative">
                        <div className="relative h-[400px] lg:h-full min-h-[480px] overflow-hidden">
                            <AppImage
                                src="/assets/images/about.jpg"
                                alt="Shahdaz working at desk with design tools, creative workspace with multiple monitors"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw" />

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/60" />

                            {/* Corner accent */}
                            {/* <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                                <div className="bg-accent border-3 border-primary p-4 neo-shadow">
                                    <div
                                        className="font-display font-black text-primary text-3xl leading-none"
                                        style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                                        5
                                    </div>
                                    <div
                                        className="font-mono-neo text-xs text-primary uppercase tracking-widest mt-1"
                                        style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                        Years
                                    </div>
                                </div>
                                <div className="bg-primary border-3 border-accent p-4">
                                    <div
                                        className="font-display font-black text-accent text-3xl leading-none"
                                        style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                                        47+
                                    </div>
                                    <div
                                        className="font-mono-neo text-xs text-secondary/60 uppercase tracking-widest mt-1"
                                        style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                        Projects
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Right: Bio + skills */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-10">
                        {/* Label + Heading */}
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

                                I BUILD{" "}
                                <span className="text-accent">THINGS</span>
                                <br />
                                PEOPLE USE.
                            </h2>
                            <p
                                className="font-body text-secondary/70 text-base md:text-lg leading-relaxed max-w-lg"
                                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>

                                Based in Samarinda, Indonesia. I've been designing and building digital products
                                since 2022 — from social media design to a helpful web application for a small business. My work
                                sits at the intersection of design craft and engineering precision.
                            </p>
                        </div>

                        {/* Values */}
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

                        {/* Skills */}
                        <div className="reveal-up" id="skills">
                            <div
                                className="font-mono-neo text-xs text-secondary/40 uppercase tracking-widest mb-4"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                Tools & Technologies
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

                        {/* Download CV */}
                        <div className="reveal-up">
                            <button className="neo-btn neo-btn-primary text-sm" onClick={() => window.open("/assets/Shadaz Resume.pdf", "_blank")}>
                                Download CV
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}