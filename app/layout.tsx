import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Navigation from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdul Wahab - Software Engineer & Flutter Developer',
  description: 'Seasoned Software Engineer with 2+ years of experience in cross-platform development, AI integration, and scalable architecture. Specializing in Flutter, mobile apps, and AI-powered solutions.',
  keywords: 'Abdul Wahab, Software Engineer, Flutter Developer, AI Integration, Mobile Development, Cross-platform, Pakistan, Peshawar, Clean Architecture, Scalable Applications',
  authors: [{ name: 'Abdul Wahab' }],
  creator: 'Abdul Wahab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdulwahab.dev',
    siteName: 'Abdul Wahab - Portfolio',
    title: 'Abdul Wahab - Software Engineer & Flutter Developer',
    description: 'Seasoned Software Engineer with 2+ years of experience in cross-platform development, AI integration, and scalable architecture.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdul Wahab - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Wahab - Software Engineer & Flutter Developer',
    description: 'Seasoned Software Engineer with 2+ years of experience in cross-platform development, AI integration, and scalable architecture.',
    creator: '@iabdulwahab.edu',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}