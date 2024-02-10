import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tigran & Mariam',
  description: 'Tigran & Mariam invitation',
};

type RootLayoutProps = PropsWithChildren & {
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
