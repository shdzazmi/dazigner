"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

const projects = [
    {
        id: 1,
        title: "Disdukcapil Samarinda",
        category: "Front-End Development",
        year: "2025",
        description: "End-to-end redesign of a Disdukcapil Samarinda website, with new design and user experience.",
        image: "/assets/images/disdukcapil.jpg",
        alt: "Disdukcapil Samarinda website interface",
        featured: true,
        tags: ["Blade", "Javascript", "Bootstrap"],
        color: "#FFE135",
        link: "https://disdukcapil.samarindakota.go.id/"
    },
    {
        id: 2,
        title: "Body Wellness Web Application",
        category: "Full-Stack Development",
        year: "2025",
        description: "Web based app for a body wellness business that helps manage room bookings, handle sales through a POS system, and track completed therapy sessions for reporting and export.",
        image: "/assets/images/project-cover-1.jpg",
        alt: "Body Wellness Web Application interface",
        featured: false,
        tags: ["Laravel", "Javascript", "Bootstrap"],
        color: "#FF3B3B"
    },
    {
        id: 3,
        title: "Kenikahanku Wedding Invitation",
        category: "Front-End Development",
        year: "2022",
        description: "Kenikahanku is an online wedding invitation with warm and elegant design.",
        image: "/assets/images/kenikahanku.png",
        alt: "Kenikahanku interface",
        featured: false,
        tags: ["Blade", "Javascript", "Bootstrap"],
        color: "#FFE135"
    },
    {
        id: 4,
        title: "Jogfit",
        category: "Mobile App",
        year: "2018",
        description: "Jogfit is a mobile application designed to help users track their running activities and improve their fitness levels.",
        image: "/assets/images/jogfit.png",
        alt: "Jogfit Mobile interface",
        featured: false,
        tags: ["Java", "Android Studio"],
        color: "#1A1A1A"
    }];


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
                {/* Section header */}
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

                            PROJECTS THAT
                            <br />
                            <span className="underline-accent">MADE A DENT.</span>
                        </h2>
                    </div>
                    <div className="reveal-right">
                        <p
                            className="font-body text-muted text-base max-w-xs leading-relaxed"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>

                            A curated selection of client work and personal projects. might a bit messy.
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-3 border-primary stagger-children">
                    {/* Featured: spans 2 cols */}
                    <div className="reveal-up lg:col-span-3 border-b-3 border-r-3 border-primary md:border-r-0 lg:border-r-3">
                        <ProjectCard project={projects[0]} large />
                    </div>

                    {/* Card 2: tall */}
                    {/* <div className="reveal-up border-b-3 border-primary">
                        <ProjectCard project={projects[1]} />
                    </div> */}

                    {/* Card 3 */}
                    {/* <div className="reveal-up border-b-3 border-r-3 border-primary">
                        <ProjectCard project={projects[0]} />
                    </div> */}

                    {/* Card 4 */}
                    <div className="reveal-up border-b-3 border-r-3 border-primary">
                        <ProjectCard project={projects[1]} />
                    </div>

                    {/* Card 5 */}
                    <div className="reveal-up border-b-3 border-primary">
                        <ProjectCard project={projects[2]} />
                    </div>

                    {/* Card 6 */}
                    <div className="reveal-up border-b-3 border-primary">
                        <ProjectCard project={projects[3]} />
                    </div>
                </div>

                {/* CTA row */}
                {/* <div className="flex justify-center mt-12 reveal-up">
                    <button className="neo-btn neo-btn-secondary text-sm">
                        View Full Archive
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </section>);

}

function ProjectCard({ project, large }: { project: typeof projects[0]; large?: boolean; }) {
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