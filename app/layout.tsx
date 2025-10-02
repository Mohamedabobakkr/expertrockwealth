import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, Montserrat } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const garamond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['300', '400', '500', '600', '700'],
});
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  weight: ['400', '500', '600', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Expert Rock Wealth',
    default: 'Expert Rock Wealth - UAE Business Formation & Residency Services',
  },
  description:
    'Professional UAE company formation, residency visas, banking, and wealth management services. Trusted by 1000+ clients. Get started today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${garamond.variable} ${ebGaramond.variable} ${montserrat.variable}`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
