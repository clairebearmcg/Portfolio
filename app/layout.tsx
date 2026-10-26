import '@mantine/core/styles.css';

import React from 'react';
import { Cal_Sans, IBM_Plex_Sans, Instrument_Serif, Public_Sans } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { SiteNav } from '../components/SiteNav/SiteNav';
import { cssVariablesResolver, theme } from '../theme';

const calSans = Cal_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cal',
});
const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
});
// Loaded as the variable font (covers 100–700): Google serves every Plex weight from one file, and
// listing weights separately makes Turbopack fail on the duplicate font URLs
const plexSans = IBM_Plex_Sans({
  weight: 'variable',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-plex',
});
const publicSans = Public_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-public',
});

export const metadata = {
  title: 'Claire McGregor — UX',
  description:
    'Product design portfolio of Claire McGregor: UX case studies on smart-home alerts, energy insights and EV charging.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html
      lang="en"
      className={`${calSans.variable} ${instrumentSerif.variable} ${plexSans.variable} ${publicSans.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript forceColorScheme="light" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <MantineProvider
          theme={theme}
          cssVariablesResolver={cssVariablesResolver}
          forceColorScheme="light"
        >
          <SiteNav />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
