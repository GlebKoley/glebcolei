import { ReactNode } from 'react';

import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Metadata, Viewport } from 'next';
import { Raleway } from 'next/font/google';

import Header from '@/lib/components/Layout/Header';

import { createClient } from '../../prismic/prismicio';

const RalewayFont = Raleway({
   display: 'swap',
   subsets: ['latin'],
   variable: '--font-Raleway',
   weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
   manifest: '/manifest.json',
   icons: {
      apple: '/apple-touch-icon.png',
      icon: [
         { url: '/favicon.ico' },
         { sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png' },
         { sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png' },
      ],
   },
};

export const viewport: Viewport = {
   initialScale: 1,
   width: 'device-width',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
   const client = createClient();

   const layoutData = await client.getSingle('layout');

   return (
      <html lang="ru" className="h-full">
         <body className={`${RalewayFont.variable} h-full overflow-x-hidden antialiased`}>
            <Header links={layoutData.data.button_link} />
            {children}
            <Analytics />
         </body>
      </html>
   );
};

export default RootLayout;
