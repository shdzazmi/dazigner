"use client";

import React from "react";

import AppLogo from "@/components/ui/AppLogo";

const footerLinks = [
    // { label: "Work", href: "#work" },
    // { label: "About", href: "#about" },
    // { label: "Privacy", href: "#" },
    // { label: "Terms", href: "#" },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/shdzazmi",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://instagram.com/shdzazmi",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
            </svg>
        ),
    },
    {
        label: "Behance",
        href: "https://behance.net/shahdaznuzband",
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                <path d="M3 12l4.5 0" />
                <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                <path d="M16 6l3 0" />
            </svg>
        ),
    },
    {
        label: "Dribbble",
        href: "https://dribbble.com/shdzazmi",
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M14.384 14.38a22.877 22.877 0 0 1 1.056 4.863l.064 .644l.126 1.431a10 10 0 0 1 -9.15 -.98l2.08 -2.087l.246 -.24c1.793 -1.728 3.41 -2.875 5.387 -3.566l.191 -.065zm6.09 -.783l.414 .003l.981 .014a9.997 9.997 0 0 1 -4.319 6.704l-.054 -.605c-.18 -2.057 -.55 -3.958 -1.163 -5.814c1.044 -.182 2.203 -.278 3.529 -.298l.611 -.004zm-7.869 -3.181a24.91 24.91 0 0 1 1.052 2.098c-2.276 .77 -4.142 2.053 -6.144 3.967l-.355 .344l-2.236 2.24a10 10 0 0 1 -2.917 -6.741l-.005 -.324l.004 -.25h1.096l.467 -.002c3.547 -.026 6.356 -.367 8.938 -1.295l.1 -.037zm9.388 1.202l-1.515 -.02c-1.86 -.003 -3.45 .124 -4.865 .402a26.112 26.112 0 0 0 -1.163 -2.38c1.393 -.695 2.757 -1.597 4.179 -2.75l.428 -.354l.816 -.682a10 10 0 0 1 2.098 5.409l.022 .375zm-14.663 -8.46l1.266 1.522c1.145 1.398 2.121 2.713 2.949 3.985c-2.26 .766 -4.739 1.052 -7.883 1.081l-.562 .004h-.844a10 10 0 0 1 5.074 -6.593zm9.67 .182c.53 .306 1.026 .657 1.483 1.046l-1.025 .857c-1.379 1.128 -2.688 1.993 -4.034 2.649c-.89 -1.398 -1.943 -2.836 -3.182 -4.358l-.474 -.574l-.485 -.584a10 10 0 0 1 7.717 .964z" />
            </svg>

        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-primary border-t-4 border-accent">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="border-2 border-accent bg-accent p-1">
                            <AppLogo size={28} />
                        </div>
                        <span
                            className="font-display font-900 text-base uppercase tracking-wider text-secondary"
                            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900 }}
                        >
                            Dazigner Studio
                        </span>
                    </div>

                    {/* Links */}
                    <nav className="flex items-center gap-8 flex-wrap justify-center">
                        {footerLinks?.map((link) => (
                            <a
                                key={link?.label}
                                href={link?.href}
                                className="font-body font-600 text-sm text-secondary/60 hover:text-accent transition-colors uppercase tracking-wide"
                                style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}
                            >
                                {link?.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social + Copyright */}
                    <div className="flex items-center gap-4">
                        {socialLinks?.map((social) => (
                            <a
                                key={social?.label}
                                href={social?.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary/50 hover:text-accent transition-colors p-1"
                                aria-label={social?.label}
                            >
                                {social?.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-secondary/10 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p
                        className="font-mono-neo text-xs text-secondary/40 uppercase tracking-widest"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                        © 2026 Dazigner Studio. All rights reserved.
                    </p>
                    <p
                        className="font-mono-neo text-xs text-secondary/40 uppercase tracking-widest"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                        Designed with brutal honesty.
                    </p>
                </div>
            </div>
        </footer>
    );
}