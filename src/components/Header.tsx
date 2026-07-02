"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AppLogo from "@/components/ui/AppLogo";

const sectionLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
];

const portfolioLinks = [
    { label: "Dev Work", href: "/homepage" },
    { label: "Creative", href: "/portfolio/creative" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const basePath = pathname === "/portfolio/creative" ? "/portfolio/creative" : "/homepage";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        if (href.startsWith("#")) {
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else {
                router.push(`${basePath}${href}`);
            }
        } else {
            router.push(href);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-secondary border-b-4 border-primary shadow-neo"
                : "bg-secondary/95 border-b-3 border-primary"
                }`}
            style={{ backdropFilter: "blur(8px)" }}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/homepage" className="flex items-center gap-3 group">
                        <div className="border-3 border-primary bg-accent p-1 shadow-neo group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-neo-lg transition-all duration-200">
                            <AppLogo size={32} />
                        </div>
                        <span
                            className="font-display font-900 text-lg uppercase tracking-wider text-primary"
                            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}
                        >
                            Dazigner
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {portfolioLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`nav-link text-xs uppercase tracking-widest ${pathname === link.href
                                    ? "text-accent after:w-full"
                                    : "text-primary/60 hover:text-primary"
                                    }`}
                                style={{ fontFamily: "JetBrains Mono, monospace" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="w-[2px] h-5 bg-primary/20" />
                        {sectionLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="nav-link"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="neo-btn neo-btn-primary text-sm"
                        >
                            Let's Talk
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <button
                        className="md:hidden border-3 border-primary p-2 bg-secondary hover:bg-accent transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>

                <div id="mobile-nav" className={mobileOpen ? "open" : ""}>
                    <div className="border-t-3 border-primary py-6 flex flex-col gap-4">
                        <div className="flex gap-3 mb-2">
                            {portfolioLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`neo-tag text-xs flex-1 text-center justify-center ${pathname === link.href ? "neo-tag-yellow" : ""}`}
                                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        {sectionLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="font-display font-800 text-lg uppercase tracking-wider text-left text-primary hover:text-accent transition-colors py-2 border-b border-primary/20"
                                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 800 }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="neo-btn neo-btn-primary w-full justify-center mt-2"
                        >
                            Let's Talk →
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
