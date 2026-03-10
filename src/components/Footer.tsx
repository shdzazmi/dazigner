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
        href: "https://github.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "https://twitter.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Dribbble",
        href: "https://dribbble.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.37 1.73 1.35 3.92 2.163 6.29 2.163 1.42 0 2.77-.29 4.006-.783zm-9.34-2.65c.24-.405 3.045-5.055 8.298-6.755.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C9.07 11.816 3.23 11.86 2.7 11.86c-.033 0-.033 0-.033.002 0 2.6.985 4.97 2.598 6.74zm-2.51-8.507c.544.015 5.51.09 10.46-1.384a73.76 73.76 0 00-3.53-5.59 11.942 11.942 0 00-6.93 6.974zm8.717-7.95a68.94 68.94 0 013.56 5.64c3.366-1.26 4.788-3.177 4.95-3.43A10.007 10.007 0 0012.847 2.3z" />
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