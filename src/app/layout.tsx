// src/app/layout.tsx
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Sidebar from '@/components/Sidebar';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Profile & Salome - UK & International Student Consultancy',
  description: 'Expert UK student consultancy for university applications, student finance, visa guidance and guaranteed job placement. Study at British universities with full support.',
  keywords: ['UK student consultancy', 'British university application', 'international student UK', 'student visa UK', 'university enrollment UK', 'job placement after graduation', 'study in UK', 'student finance UK'],
  authors: [{ name: 'Profile & Salome' }],
  creator: 'Profile & Salome',
  publisher: 'Profile & Salome',
  openGraph: {
    title: 'Profile & Salome - national & International Student Consultancy',
    description: 'Expert national & International student consultancy for university applications, student finance, visa guidance and guaranteed job placement.',
    url: 'https://www.profilesalome.co.uk',
    siteName: 'Profile & Salome',
    images: [
      {
        url: '/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Profile & Salome Consultancy',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profile & Salome - UK & International Student Consultancy',
    description: 'Expert UK student consultancy for university applications, student finance and guaranteed job placement.',
    images: ['/images/banner.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.profilesalome.co.uk',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the public key value for inline script
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Load the EmailJS SDK */}
        <Script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js" strategy="beforeInteractive" />
        {/* Initialize EmailJS */}
        <Script id="emailjs-init">
          {`
            (function() {
              emailjs.init("${publicKey}");
              console.log("EmailJS initialized with public key");
            })();
          `}
        </Script>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <Sidebar />
      </body>
    </html>
  );
}