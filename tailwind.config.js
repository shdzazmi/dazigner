/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A1A1A',
                secondary: '#f1f1f1',
                accent: '#FFE135',
                accent2: '#FF3B3B',
                muted: '#6B6B6B',
            },
            fontFamily: {
                display: ['DM Sans', 'sans-serif'],
                body: ['Plus Jakarta Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                hero: ['clamp(64px, 10vw, 120px)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
                'hero-sm': ['clamp(48px, 7vw, 80px)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
                'section-heading': ['clamp(40px, 5vw, 64px)', { lineHeight: '1', letterSpacing: '-0.02em' }],
            },
            borderWidth: {
                '3': '3px',
                '4': '4px',
            },
            boxShadow: {
                'neo': '4px 4px 0px #1A1A1A',
                'neo-lg': '8px 8px 0px #1A1A1A',
                'neo-yellow': '6px 6px 0px #FFE135',
                'neo-sm': '2px 2px 0px #1A1A1A',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(rgba(26,26,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.06) 1px, transparent 1px)",
            },
            backgroundSize: {
                'grid': '60px 60px',
            },
            animation: {
                'marquee': 'marquee 20s linear infinite',
                'float': 'float-card 4s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'float-card': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};