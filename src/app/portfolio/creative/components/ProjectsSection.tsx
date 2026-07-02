"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

const projects = [
    {
        id: 1,
        title: "Resep Oyin Social Media Posts",
        category: "Social Media Design",
        year: "2026",
        description: "Instagram reels, posts, story, and highlight, for a local food brand. If you like dimsum, gyoza, sate taichan, go check out their Instagram!",
        image: "/assets/images/resepoyin.jpg",
        alt: "Social media design for Resep Oyin",
        featured: true,
        tags: ["Photoshop", "Premiere", "Capcut", "Instagram"],
        color: "#FFE135",
        link: "https://www.instagram.com/resep_oyin/"
    },
    {
        id: 2,
        title: "Greyphone.id Social Media Posts & Reels",
        category: "Social Media Design",
        year: "2026",
        description: "Got a project to create a social media design for a local phone brand. Check out their Instagram!",
        image: "/assets/images/greyphone.jpg",
        alt: "Social media design for Greyphone.id",
        featured: true,
        tags: ["Photoshop", "Capcut", "Premiere", "Instagram"],
        color: "#1A1A1A",
        link: "https://www.instagram.com/greyphone.id/"
    },
    {
        id: 3,
        title: "Greyphone.id Sticker Pack",
        category: "Graphic Design",
        year: "2026",
        description: "Bold, eye-catching sticker pack for a local phone brand.",
        image: "/assets/images/greyphonesticker.jpg",
        alt: "Sticker design for Greyphone.id",
        featured: true,
        tags: ["Illustrator"],
        color: "#1A1A1A",
    },
    {
        id: 4,
        title: "Corporate Social Media Posts",
        category: "Social Media Design",
        year: "2025",
        description: "Corporate IG Post, IG stories, and graphic design.",
        image: "/assets/images/brisamarinda.jpg",
        alt: "BRI Samarinda Gajah Mada Corporate Social Media Posts",
        featured: true,
        tags: ["Photoshop", "Premiere", "After Effects", "Instagram"],
        color: "#ffffff",
    },
    {
        id: 5,
        title: "TikTok Content Strategy",
        category: "Video Editing",
        year: "2025",
        description: "Short-form video content for a food brand — recipe clips, behind-the-scenes edits, and trend-based content with captions.",
        image: "https://images.unsplash.com/photo-1611605698335-179b7ebb6731?w=800&h=600&fit=crop",
        alt: "TikTok content creation setup",
        featured: false,
        tags: ["CapCut", "Premiere Pro", "TikTok"],
        color: "#FF3B3B",
    },
    {
        id: 6,
        title: "Podcast Intro & Outro",
        category: "Motion Graphics",
        year: "2024",
        description: "Animated intro and outro sequence for a podcast — logo reveal, sound sync, and lower-third templates for episode branding.",
        image: "https://images.unsplash.com/photo-1478737272763-0151d3938565?w=800&h=600&fit=crop",
        alt: "Podcast studio with microphone and editing setup",
        featured: false,
        tags: ["After Effects", "Audition", "Motion"],
        color: "#FFE135",
    },
];

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );

        const els = sectionRef.current?.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="work" ref={sectionRef} className="py-24 md:py-32 bg-secondary">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="reveal-left">
                        <div className="section-label mb-4">Selected Work</div>
                        <h2
                            className="font-display font-black text-primary"
                            style={{
                                fontFamily: "DM Sans, sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(40px, 5vw, 64px)",
                                lineHeight: "1",
                                letterSpacing: "-0.02em"
                            }}>
                            CONTENT THAT
                            <br />
                            <span className="underline-accent">GETS NOTICED.</span>
                        </h2>
                    </div>
                    <div className="reveal-right">
                        <p
                            className="font-body text-muted text-base max-w-xs leading-relaxed"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Social media graphics, video edits, and visual content crafted for brands and creators.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-3 border-primary stagger-children">
                    <div className="reveal-up lg:col-span-3 border-b-3 border-r-3 border-primary md:border-r-0 lg:border-r-3">
                        <ProjectCard project={projects[0]} large />
                    </div>

                    <div className="reveal-up border-b-3 border-r-3 border-primary">
                        <ProjectCard project={projects[1]} />
                    </div>

                    <div className="reveal-up border-b-3 border-r-3 border-primary">
                        <ProjectCard project={projects[2]} />
                    </div>

                    <div className="reveal-up border-b-3 border-primary">
                        <ProjectCard project={projects[3]} />
                    </div>

                    {/* <div className="reveal-up border-b-3 border-r-3 border-primary">
                        <ProjectCard project={projects[4]} />
                    </div>

                    <div className="reveal-up border-b-3 border-primary">
                        <ProjectCard project={projects[5]} />
                    </div> */}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, large }: { project: typeof projects[0]; large?: boolean }) {

    return (
        <div className={`project-card group relative ${large ? "h-[480px] md:h-[520px]" : "h-[360px] md:h-[400px]"} w-full`}>
            <AppImage
                src={project.image}
                alt={project.alt}
                fill
                className="project-img object-cover"
                sizes={large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} />

            {/* Default overlay: bottom info */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center gap-3 mb-3">
                    <span
                        className="neo-tag neo-tag-yellow text-xs"
                        style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}>

                        {project.category}
                    </span>
                    <span
                        className="font-mono-neo text-xs text-secondary/60"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}>

                        {project.year}
                    </span>
                </div>
                <h3
                    className="font-display font-black text-secondary text-xl md:text-2xl leading-tight"
                    style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                    {project.title}
                </h3>
            </div>

            {/* Hover overlay: full info */}
            <div className="overlay z-20 flex-col p-8 text-left items-start justify-end">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag) =>
                        <span key={tag} className="neo-tag neo-tag-filled text-xs" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}>
                            {tag}
                        </span>
                    )}
                </div>
                <h3
                    className="font-display font-black text-primary text-2xl md:text-3xl leading-tight mb-3"
                    style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}>

                    {project.title}
                </h3>
                <p
                    className="font-body text-sm text-primary/80 leading-relaxed mb-6 max-w-sm"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>

                    {project.description}
                </p>
                {project.link && (
                    <div
                        className="flex items-center gap-2 font-display font-black text-sm uppercase tracking-wide text-primary transition-all duration-300 hover:gap-4"
                        onClick={() => window.open(project.link, "_blank")}
                        style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}
                    >
                        View Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                )}

                {/* <div className="flex items-center gap-2 font-display font-black text-sm uppercase tracking-wide text-primary" onClick={() => window.open(project.link, "_blank")} style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}>
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div> */}
            </div>
        </div>);
}
