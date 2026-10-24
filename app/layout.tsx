import '@mantine/core/styles.css';

import React from 'react';
import { Cal_Sans, IBM_Plex_Sans, Instrument_Serif, Public_Sans } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
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
const plexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
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
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
