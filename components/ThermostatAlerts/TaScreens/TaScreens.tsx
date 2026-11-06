import Image from 'next/image';
import classes from './TaScreens.module.css';

const IMG = '/case-studies/thermostat-alerts';

// Left to right, top to bottom, as in the Figma grid (24556:4162); each is a 554px square export
const SCREENS = [
  'HVAC issue alert, first of three paged notifications: check the thermostat tab on the app',
  'Package delivered alert, second of three paged notifications',
  'Winter storm warning alert, third of three paged notifications',
  'Package delivered at 10:05 am with a glowing green box icon and tap to dismiss',
  'Package delivered card on a warm amber glow with swipe up to see more',
  'Stacked notifications: heat wave warning in focus between faded package and winter storm alerts',
  'Three notifications list with package delivered highlighted and a scroll bar',
  'Winter storm warning card outlined in a blue glow',
  'HVAC issue card stacked over a package delivered card',
  'Winter storm warning with a side list of notifications 1 to 3',
  'HVAC issue card above a frosted winter storm warning card',
  'Winter storm warning in focus between blurred HVAC issue and package alerts',
  'Winter storm warning with numbered tabs 1 to 4 across the top',
  'Large HVAC issue alert with a yellow warning icon and a vertical pager',
  'Package delivered, HVAC issue and winter storm warning listed in one card',
  'Winter storm warning with numbered tabs 1 to 4 below',
  'Heat wave warning: pre cool your home by 2° with an Adjust temperature button',
  'Tip: pre cool your home by 2° to save money, with an Adjust temperature button',
  '67° and good air quality: open windows and doors to save money',
  'HVAC issue alert in red with a close button',
  'Note: the next three designs were inspired by the Matisse painting La Gerbe, using simple shapes, kid-like verbiage and fun, simple colors',
  'Blue raindrop shape: big puddles ahead, heavy rain expected in the next couple hours',
  'Brown hexagon: you’ve got mail, a package has been left on your front porch',
  'Purple lightning bolt: more power to ya, your heating used 18% less energy this week',
  'Temperature scroller at 74° with saving $4',
  'Temperature grid with currently 72° and heat to 76°, saving $3',
  'Temperature grid: now 74°, heat to 80°, estimated +$10',
  'Tip to adjust to 76° to save, with 74° and a slider',
  'Dial set to 66° with a blue arc',
  'Dial set to 73°, saving $4, tap anywhere to save',
  'Dial set to 76°, tap anywhere to save',
  '74° with a slider showing save $3',
  'Dial set to 66° with a green arc',
  'Dial set to 73° in green, saving $4',
  'Dial set to 76° in green with a save button',
  'Swipe to adjust between 67, 68 and 69 degrees',
  'Grid of round temperature buttons with 74° selected, saving $4',
  'Temperature grid: cool to 74°, saving $4',
  'Temperature grid with 74° glowing, saving $4',
  '68° between blurred 67 and 69, saving $4 with a green slider',
];

export function TaScreens() {
  return (
    <section className={classes.section} aria-label="Thermostat alert explorations">
      <ul className={classes.grid}>
        {SCREENS.map((alt, i) => (
          <li key={alt}>
            <Image
              className={classes.screen}
              src={`${IMG}/square-${String(i + 1).padStart(2, '0')}.jpg`}
              alt={alt}
              width={554}
              height={554}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
