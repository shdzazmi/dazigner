"use client";

import React from "react";

const items = [
    "Social Media Design",
    "Video Editing",
    "Instagram Reels",
    "YouTube Thumbnails",
    "TikTok Content",
    "Motion Graphics",
    "Brand Content",
    "Carousel Design",
];

export default function MarqueeSection() {
    const doubled = [...items, ...items];

    return (
        <div className="marquee-overflow py-5 bg-primary relative z-10">
            <div className="flex overflow-hidden">
                <div className="marquee-track">
                    {doubled?.map((item, i) => (
                        <div key={i} className="ticker-item">
                            <span
                                className="text-secondary"
                                style={{
                                    fontFamily: "DM Sans, sans-serif",
                                    fontWeight: 800,
                                    fontSize: "17px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}>
                                {item}
                            </span>
                            <span className="ticker-dot" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
