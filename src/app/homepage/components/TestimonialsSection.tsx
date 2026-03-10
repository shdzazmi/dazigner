"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import AppImage from "@/components/ui/AppImage";

const testimonials = [
    {
        quote:
            "Jordan delivered a product that genuinely changed how our team thinks about data. The dashboard redesign wasn't just beautiful — it cut our analysts' reporting time in half. We've worked with a lot of designers. None like this.",
        author: "Priya Mehta",
        role: "Head of Product",
        company: "Vantage Analytics",
        avatar:
            "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
        avatarAlt: "Priya Mehta, Head of Product at Vantage Analytics, professional headshot"
    },
    {
        quote:
            "We needed someone who could think in systems, not just screens. Jordan built our entire design system from scratch in three weeks. It's now the backbone of every product decision we make. Hire them before someone else does.",
        author: "Marcus Webb",
        role: "CTO",
        company: "Harlow Co.",
        avatar:
            "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
        avatarAlt: "Marcus Webb, CTO at Harlow Co., professional headshot in office setting"
    },
    {
        quote:
            "The Meridian app shipped with a 4.9 star rating on day one. Jordan's process is rigorous — research, prototype, test, iterate — and the results speak for themselves. 80,000 downloads in the first month. Enough said.",
        author: "Aaliyah Torres",
        role: "Founder & CEO",
        company: "Meridian Health",
        avatar:
            "https://img.rocket.new/generatedImages/rocket_gen_img_19590c494-1763294888289.png",
        avatarAlt: "Aaliyah Torres, Founder and CEO of Meridian Health, professional portrait"
    }];


export default function TestimonialsSection() {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cursorActive, setCursorActive] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const quoteRef = useRef<HTMLQuoteElement>(null);
    const autoTimer = useRef<NodeJS.Timeout | undefined>(undefined);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
            setIsAnimating(false);
        }, 300);
    }, [isAnimating]);

    // Auto-advance
    useEffect(() => {
        autoTimer.current = setTimeout(goToNext, 6000);
        return () => {
            if (autoTimer.current) clearTimeout(autoTimer.current);
        };
    }, [index, goToNext]);

    // Word animation
    useEffect(() => {
        const words = quoteRef.current?.querySelectorAll<HTMLSpanElement>(".testimonial-word");
        if (!words) return;
        words.forEach((w: HTMLSpanElement, i: number) => {
            setTimeout(() => w.classList.add("word-visible"), i * 28);
        });
    }, [index, isAnimating]);

    // Scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.15 }
        );
        const els = sectionRef.current?.querySelectorAll(".reveal-up");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const t = testimonials[index];
    const words = t.quote.split(" ");

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="py-24 md:py-32 bg-secondary relative overflow-hidden"
            onClick={goToNext}
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            style={{ cursor: "none" }}>

            {/* Large decorative quote mark */}
            <div
                className="absolute top-16 right-16 font-display font-black text-[240px] text-primary/5 leading-none pointer-events-none select-none"
                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}
                aria-hidden="true">

                "
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="reveal-up">
                        <div className="section-label mb-4">Client Testimonials</div>
                        <h2
                            className="font-display font-black text-primary"
                            style={{
                                fontFamily: "DM Sans, sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(40px, 5vw, 64px)",
                                lineHeight: "1",
                                letterSpacing: "-0.02em"
                            }}>

                            WHAT CLIENTS
                            <br />
                            ACTUALLY SAY.
                        </h2>
                    </div>
                    <div className="reveal-up flex items-center gap-4">
                        {testimonials.map((_, i) =>
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setTimeout(() => { setIndex(i); setIsAnimating(false); }, 300);
                                    }
                                }}
                                className={`transition-all duration-300 border-3 border-primary ${i === index ? "w-12 h-4 bg-accent" : "w-4 h-4 bg-transparent hover:bg-accent/40"}`
                                }
                                aria-label={`Go to testimonial ${i + 1}`} />

                        )}
                    </div>
                </div>

                {/* Testimonial content */}
                <div className="reveal-up grid lg:grid-cols-[1fr_auto] gap-12 items-start border-3 border-primary p-8 md:p-12 neo-shadow-lg relative">
                    {/* Progress bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary/10">
                        <div
                            className="h-full bg-accent transition-all duration-[6000ms] ease-linear"
                            key={index}
                            style={{ width: "100%", animation: "progressBar 6s linear forwards" }} />

                    </div>

                    <div>
                        {/* Quote */}
                        <blockquote
                            ref={quoteRef}
                            className={`font-display font-black text-primary mb-10 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`
                            }
                            style={{
                                fontFamily: "DM Sans, sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(20px, 2.5vw, 32px)",
                                lineHeight: "1.4",
                                letterSpacing: "-0.01em"
                            }}>

                            <span className="text-accent text-4xl font-black leading-none mr-1" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>"</span>
                            {!isAnimating && words.map((word, i) =>
                                <span key={i} className="testimonial-word">
                                    {word}
                                </span>
                            )}
                            <span className="text-accent text-4xl font-black leading-none ml-1" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>"</span>
                        </blockquote>

                        {/* Author */}
                        <div
                            className={`flex items-center gap-5 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`
                            }>

                            <div className="relative flex-shrink-0">
                                <div className="w-14 h-14 border-3 border-primary overflow-hidden neo-shadow">
                                    <AppImage
                                        src={t.avatar}
                                        alt={t.avatarAlt}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover" />

                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent border-2 border-primary" />
                            </div>
                            <div className="border-l-3 border-accent pl-5">
                                <div
                                    className="font-display font-black text-primary text-base"
                                    style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                                    {t.author}
                                </div>
                                <div
                                    className="font-mono-neo text-xs text-muted uppercase tracking-widest mt-1"
                                    style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                    {t.role} — {t.company}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Index + hint */}
                    <div className="hidden md:flex flex-col items-end gap-6">
                        <div className="text-right">
                            <div
                                className="font-display font-black text-6xl text-primary leading-none"
                                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                                0{index + 1}
                            </div>
                            <div
                                className="font-mono-neo text-xs text-muted uppercase tracking-widest"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                / 0{testimonials.length}
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div
                                className="font-mono-neo text-xs text-muted uppercase tracking-widest text-right"
                                style={{ fontFamily: "JetBrains Mono, monospace" }}>

                                Click anywhere
                                <br />
                                to advance
                            </div>
                            <div className="flex gap-2 mt-2">
                                {testimonials.map((_, i) =>
                                    <div
                                        key={i}
                                        className={`w-8 h-8 border-2 border-primary overflow-hidden ${i === index ? "ring-2 ring-accent ring-offset-1" : "opacity-40"}`
                                        }>

                                        <AppImage
                                            src={testimonials[i].avatar}
                                            alt={testimonials[i].avatarAlt}
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-cover" />

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
        </section>);

}