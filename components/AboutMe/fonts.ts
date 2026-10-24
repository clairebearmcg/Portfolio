// Display fonts used only by the About me collage, one per word as in the Figma design.
// Loaded here (not in the root layout) so other pages don't pay for them.
import {
  Chathura,
  East_Sea_Dokdo,
  Fascinate,
  Hubot_Sans,
  Iosevka_Charon_Mono,
  Jacquard_24,
  MuseoModerno,
  Nova_Cut,
  Nova_Slim,
  Poor_Story,
  Quantico,
  Romanesco,
  Sarina,
  Shrikhand,
  Silkscreen,
  Six_Caps,
  Staatliches,
  Sulphur_Point,
} from 'next/font/google';

// next/font needs literal options in every call, so they are repeated rather than shared
const jacquard = Jacquard_24({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-jacquard',
});
const chathura = Chathura({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-chathura',
});
const quantico = Quantico({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-quantico',
});
const staatliches = Staatliches({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-staatliches',
});
const sulphur = Sulphur_Point({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['300', '400'],
  variable: '--font-about-sulphur',
});
const museo = MuseoModerno({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '600',
  variable: '--font-about-museo',
});
const hubot = Hubot_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  axes: ['wdth'],
  variable: '--font-about-hubot',
});
const fascinate = Fascinate({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-fascinate',
});
const sarina = Sarina({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-sarina',
});
const shrikhand = Shrikhand({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-shrikhand',
});
const poorStory = Poor_Story({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-poor-story',
});
const romanesco = Romanesco({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-romanesco',
});
const sixCaps = Six_Caps({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-six-caps',
});
const novaSlim = Nova_Slim({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-nova-slim',
});
const novaCut = Nova_Cut({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-nova-cut',
});
const dokdo = East_Sea_Dokdo({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-dokdo',
});
const silkscreen = Silkscreen({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '400',
  variable: '--font-about-silkscreen',
});
const iosevka = Iosevka_Charon_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: '500',
  variable: '--font-about-iosevka',
});

/** Class names that define every --font-about-* variable; put them on the page root */
export const aboutFontVariables = [
  jacquard,
  chathura,
  quantico,
  staatliches,
  sulphur,
  museo,
  hubot,
  fascinate,
  sarina,
  shrikhand,
  poorStory,
  romanesco,
  sixCaps,
  novaSlim,
  novaCut,
  dokdo,
  silkscreen,
  iosevka,
]
  .map((font) => font.variable)
  .join(' ');
