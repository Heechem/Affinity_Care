import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Affinity Respite Service',
  description: 'Home Care Affinities and services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-rose-800 to-indigo-600 text-slate-50 h-full`}
      >
        {' '}
        <NavBar />
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
