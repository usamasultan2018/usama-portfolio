import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Navigation from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Usama Sultan - Flutter Developer & Software Engineer',
  description:
    'Flutter Developer with 2+ years of experience building production-ready cross-platform apps for iOS, Android, and Web. Specialized in state management, Firebase integration, and full-stack with Node.js & MongoDB.',
  keywords:
    'Usama Sultan, Flutter Developer, Software Engineer, Cross-platform, Node.js, MongoDB, Firebase, Clean Architecture, Peshawar, Pakistan',
  authors: [{ name: 'Usama Sultan' }],
  creator: 'Usama Sultan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usamasultan.com',
    siteName: 'Usama Sultan - Portfolio',
    title: 'Usama Sultan - Flutter Developer & Software Engineer',
    description:
      'Flutter Developer with 2+ years of experience in cross-platform apps, AI integration, and clean architecture.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Usama Sultan - Flutter Developer',
      },
    ],
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
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
