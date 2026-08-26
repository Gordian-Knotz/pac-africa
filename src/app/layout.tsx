import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://pac.africa'),
  title: 'PAC Africa | Activating Your Potential',
  description: 'Strategic HR, organizational development, and transformative solutions for organizations across Africa. 100+ years combined experience.',
  keywords: ['HR consulting', 'organizational development', 'talent management', 'Africa', 'business transformation'],
  authors: [{ name: 'PAC Africa' }],
  creator: 'PAC Africa',
  publisher: 'PAC Africa',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pac.africa',
    title: 'PAC Africa | Activating Your Potential',
    description: 'Strategic HR, organizational development, and transformative solutions for organizations across Africa.',
    siteName: 'PAC Africa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAC Africa | Activating Your Potential',
    description: 'Strategic HR, organizational development, and transformative solutions for organizations across Africa.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
