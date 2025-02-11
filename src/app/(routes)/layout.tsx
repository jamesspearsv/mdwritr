import './globals.css';
import { inter } from '@/src/app/ui/fonts';
import type { Metadata } from 'next';
import Nav from '../ui/nav/Nav';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Writr.md',
  icons: '/icon.png',
  description: 'Markdown blogging platform built with Nextjs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
