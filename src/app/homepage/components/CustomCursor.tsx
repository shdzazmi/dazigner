"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const actual = useRef({ x: 0, y: 0 });
    const raf = useRef<number | null>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            actual.current.x = lerp(actual.current.x, pos.current.x, 0.18);
            actual.current.y = lerp(actual.current.y, pos.current.y, 0.18);
            if (raf.current !== null) {
                cursor.style.left = `${actual.current.x}px`;
                cursor.style.top = `${actual.current.y}px`;
                raf.current = requestAnimationFrame(animate);
            }
        };

        raf.current = requestAnimationFrame(animate);
        window.addEventListener("mousemove", onMove);

        // Hover states
        const addHover = () => cursor.classList.add("cursor-hover");
        const removeHover = () => cursor.classList.remove("cursor-hover");
        const addText = () => cursor.classList.add("cursor-text");
        const removeText = () => cursor.classList.remove("cursor-text");

        const interactives = document.querySelectorAll("a, button, .project-card, [data-cursor='hover']");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        const textEls = document.querySelectorAll("input, textarea");
        textEls.forEach((el) => {
            el.addEventListener("mouseenter", addText);
            el.addEventListener("mouseleave", removeText);
        });

        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current !== null) cancelAnimationFrame(raf.current);
            interactives.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
            textEls.forEach((el) => {
                el.removeEventListener("mouseenter", addText);
                el.removeEventListener("mouseleave", removeText);
            });
        };
    }, []);

    return (
        <div
            id="neo-cursor"
            ref={cursorRef}
            aria-hidden="true"
        />
    );
}