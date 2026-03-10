import * as React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import CustomCursor from '@/components/CustomCursor';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Dazigner Studio',
  description: 'Portfolio of Dazigner Studio, a neo-brutalist portfolio. Available for freelance projects and full-time roles.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.png', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}

        {/* Localized Rocket Scripts */}
        <Script
          src="/rocket-web.js?_cfg=https%3A%2F%2Fneoportfol2995back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17"
          strategy="afterInteractive"
        />
        <Script
          src="/rocket-shot.js?v=0.0.2"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}