'use client';

import { createTheme, CSSVariablesResolver, rem } from '@mantine/core';

export const theme = createTheme({
  // Shrinks every rem()-based size on the page; 1 matches the Figma frame exactly.
  // Body text is set in px so it stays at the Figma size.
  scale: 0.95,
  fontFamily: 'var(--font-plex), sans-serif',
  headings: {
    fontFamily: 'var(--font-serif), serif',
    fontWeight: '400',
  },
  defaultRadius: rem(20),
  other: {
    primary: '#2d2c2a',
    secondary: '#77746d',
    tertiary: '#c3c2bf',
    card: '#f7f7f7',
  },
});

// Exposes theme.other colours as --color-* CSS variables for the CSS modules
export const cssVariablesResolver: CSSVariablesResolver = (t) => ({
  variables: {
    '--color-primary': t.other.primary,
    '--color-secondary': t.other.secondary,
    '--color-tertiary': t.other.tertiary,
    '--color-card': t.other.card,
  },
  light: {},
  dark: {},
});
