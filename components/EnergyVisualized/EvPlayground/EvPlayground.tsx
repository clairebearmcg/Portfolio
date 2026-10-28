import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import classes from './EvPlayground.module.css';

const IMG = '/case-studies/energy-visualized';

/*
 * Each sub-section is a free-form collage. x/w/h are Figma px in the 1440 frame
 * (24519:3410); y is relative to the bottom of the sub-section's label row.
 */
interface Shot {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Corner radius in px */
  radius?: number;
  /** Only the right-hand corners are rounded */
  rightCorners?: boolean;
  /** Hairline white outline (Figma 0.2px border) */
  outlined?: boolean;
  /** Spans both columns of the small-screen grid */
  wide?: boolean;
  /** Sits under its neighbours, as in the Figma layer order */
  under?: boolean;
  /** Box is narrower than the image; shows the image's left side only */
  cropLeft?: boolean;
}

type Widget = 'categoryCircles' | 'glowList' | 'cameraGoal';

interface WidgetSpot {
  widget: Widget;
  x: number;
  y: number;
  w: number;
  h: number;
  wide?: boolean;
}

type Item = Shot | WidgetSpot;

interface Group {
  label: string;
  /** Collage height in Figma px */
  height: number;
  items: Item[];
}

const GROUPS: Group[] = [
  {
    label: 'Visualizing energy use',
    height: 1256,
    items: [
      {
        src: `${IMG}/play-energy-spend-bars.png`,
        alt: 'Energy spend: bars for each category at 51%, 20%, 14%, 8% and 4%',
        x: 1258,
        y: 53,
        w: 227,
        h: 122,
      },
      {
        src: `${IMG}/play-bill-breakdown-line.png`,
        alt: 'Bill breakdown line chart for May 7 to June 3: heating and cooling 46%, water heating 14%, appliances',
        x: 27,
        y: 137,
        w: 287,
        h: 140,
      },
      {
        src: `${IMG}/play-bill-breakdown-radial.png`,
        alt: 'Bill breakdown card with a radial chart and a list of categories with percentages and costs',
        x: 375,
        y: 114,
        w: 198,
        h: 149,
        radius: 12,
      },
      {
        src: `${IMG}/play-energy-orb.png`,
        alt: 'Glowing orb showing an energy score of 9.8, split into 50% HVAC, 28% water usage and 15% electric vehicle',
        x: 651,
        y: 91,
        w: 287,
        h: 231,
      },
      {
        src: `${IMG}/play-bill-breakdown-segments.png`,
        alt: 'Bill breakdown card with a segmented bar above a list of categories and costs',
        x: 1006,
        y: 114,
        w: 191,
        h: 167,
        radius: 12,
      },
      {
        src: `${IMG}/play-usage-arc.png`,
        alt: 'Usage percentages along an arc with category icons, highlighting electric vehicle at 14%',
        x: 1183,
        y: 222,
        // Only the left half of the circle (the image is 590 wide)
        w: 352,
        h: 496.5,
        wide: true,
        cropLeft: true,
      },
      {
        src: `${IMG}/play-petal-chart.png`,
        alt: 'Petal chart dividing usage into heating and AC, appliances, refrigeration, electric vehicle and more',
        x: -45,
        y: 363,
        w: 270,
        h: 257,
      },
      {
        src: `${IMG}/play-energy-spend-balance.png`,
        alt: 'Energy spend card: current balance $89.64 with a bar chart per category',
        x: 354,
        y: 360,
        w: 206,
        h: 251,
      },
      {
        src: `${IMG}/play-bill-breakdown-stacked.png`,
        alt: 'Bill breakdown of $232 as a stacked bar: heating and cooling 46%, water heating 14%, appliances 13%, lighting 12%, other 11%, electronics 4%',
        x: 706,
        y: 380,
        w: 220,
        h: 283,
      },
      {
        src: `${IMG}/play-category-tiles.png`,
        alt: 'Category tiles with product photos: heating and cooling 51%, refrigeration 20%, electric vehicle 14%, appliances 8%, laundry 4%, other 2%',
        x: 1026,
        y: 388,
        w: 89,
        h: 253,
      },
      {
        src: `${IMG}/play-petal-legend.png`,
        alt: 'Small petal chart with a category legend',
        x: 1180,
        y: 667,
        w: 83,
        h: 165,
      },
      {
        src: `${IMG}/play-donut-card.png`,
        alt: 'Donut chart card with a list of categories and costs',
        x: 56,
        y: 689,
        w: 172,
        h: 232,
        radius: 12,
      },
      {
        src: `${IMG}/play-category-columns.png`,
        alt: 'Colored columns of different heights, each topped with a category icon',
        x: 342,
        y: 709,
        w: 206,
        h: 152,
      },
      {
        src: `${IMG}/play-energy-sources.png`,
        alt: 'Energy sources: 56% solar, 38% grid, 6% battery',
        x: 987,
        y: 701,
        w: 132,
        h: 120,
      },
      {
        src: `${IMG}/play-bill-breakdown-bars.png`,
        alt: 'Bill breakdown bar chart: heating and cooling 46%, water heating 14%, appliances 13%',
        x: 651,
        y: 729,
        w: 272,
        h: 161,
      },
      {
        src: `${IMG}/play-card-overview-phone.jpg`,
        alt: 'Phone screen with a card balance, payment due date and latest transactions',
        x: 1071,
        y: 881,
        w: 136.3,
        h: 295.5,
        radius: 16,
      },
      {
        src: `${IMG}/play-energy-bank-list-phone.png`,
        alt: 'Energy bank phone screen: $127.89 bill, yearly activity and usage by category',
        x: 1227.3,
        y: 881,
        w: 136.3,
        h: 374.5,
        radius: 16,
      },
      { widget: 'categoryCircles', x: -34, y: 986, w: 545.5, h: 172.4, wide: true },
      { widget: 'glowList', x: 622, y: 1009, w: 338, h: 201, wide: true },
    ],
  },
  {
    label: 'Energy bills & savings',
    height: 1085,
    items: [
      {
        src: `${IMG}/play-energy-bank-phone-dark.jpg`,
        alt: 'Energy bank phone screen: $127.89 cash saved, expected bill $232 and a bill breakdown',
        x: 1110,
        y: 68,
        w: 200,
        h: 499,
        radius: 16,
        outlined: true,
      },
      {
        src: `${IMG}/play-usage-tomorrow.png`,
        alt: 'Usage tomorrow: $30 estimated, 75° and 3h 40m at 72°',
        x: 106,
        y: 93,
        w: 177,
        h: 162,
      },
      {
        src: `${IMG}/play-current-bill.png`,
        alt: 'Current bill: $89, estimated $95',
        x: 314,
        y: 93,
        w: 177,
        h: 162,
      },
      {
        src: `${IMG}/play-camera-goal-ring.png`,
        alt: 'Savings goal ring around an outdoor camera: $23 left',
        x: 563,
        y: 97,
        w: 237,
        h: 112,
      },
      {
        src: `${IMG}/play-estimated-bill-glow.png`,
        alt: 'Glowing estimated bill of $127.89',
        x: 807,
        y: 151,
        w: 277,
        h: 277,
      },
      { widget: 'cameraGoal', x: 660, y: 290, w: 121, h: 170 },
      {
        src: `${IMG}/play-bill-calendar.png`,
        alt: 'Billing calendar for May 6 to June 3: $89.64 today, 10 days left, estimated $95',
        x: 111,
        y: 305,
        w: 212,
        h: 288,
      },
      {
        src: `${IMG}/play-energy-bank-phone.jpg`,
        alt: 'Energy bank phone screen: $127.89 cash saved and $89.64 spent with 10 days left',
        x: 403,
        y: 305,
        w: 200,
        h: 436,
        radius: 16,
        outlined: true,
      },
      {
        src: `${IMG}/play-savings-banknote.png`,
        alt: 'Banknote showing $83 saved',
        x: 876,
        y: 483,
        w: 150,
        h: 95,
      },
      {
        src: `${IMG}/play-expected-bill.png`,
        alt: 'Expected bill: $232 in 10 days, up 10%',
        x: 671,
        y: 598,
        w: 179,
        h: 154.5,
      },
      {
        src: `${IMG}/play-energy-insights-phone.png`,
        alt: 'Energy insights phone screen: $127.89 estimated bill and a bill breakdown donut chart',
        x: 106,
        y: 651,
        w: 200,
        h: 434,
        radius: 20,
      },
      {
        src: `${IMG}/play-bill-trends.png`,
        alt: 'Trends area chart: usage down 76% this month, comparing April and May',
        x: 1039,
        y: 675,
        w: 247,
        h: 196,
      },
      {
        src: `${IMG}/play-camera-goal-pill.png`,
        alt: 'Savings goal pill: $23 left until a new camera',
        x: 789,
        y: 807,
        w: 194,
        h: 54,
      },
      {
        src: `${IMG}/play-estimated-savings.png`,
        alt: 'Estimated bill $127.89 next to +$53.24 savings',
        x: 376,
        y: 818,
        w: 272,
        h: 100,
        radius: 12,
        rightCorners: true,
      },
      {
        src: `${IMG}/play-energy-savings-summary.png`,
        alt: 'Energy savings for Feb 3 to Mar 7: $127 saved, $153 total spent, $384 without smart comfort',
        x: 696,
        y: 947,
        w: 289,
        h: 109,
      },
      {
        src: `${IMG}/play-cost-per-kwh.png`,
        alt: '13.7¢ per kWh: 3,687 kWh, $520 a month',
        x: 1085,
        y: 954,
        w: 178,
        h: 122,
      },
      {
        src: `${IMG}/play-estimated-bill-card.png`,
        alt: 'Estimated bill card: $127.89',
        x: 376,
        y: 980,
        w: 150,
        h: 96,
      },
    ],
  },
  {
    label: 'Gamification',
    height: 969,
    items: [
      {
        src: `${IMG}/play-energy-score-glow.png`,
        alt: 'Glowing energy score of 8.9',
        x: 414,
        y: 44,
        w: 215.1,
        h: 237,
      },
      {
        src: `${IMG}/play-household-usage.png`,
        alt: 'Who uses the most energy? Household members compared this week: Trish 23%, Scott 18%, Kevin 6%',
        x: 888,
        y: 54,
        w: 208,
        h: 445,
      },
      {
        src: `${IMG}/play-rank-card.png`,
        alt: 'Rank 2: The McKinleys 9.8, you 9.7',
        x: 1163,
        y: 64,
        w: 150,
        h: 150,
      },
      {
        src: `${IMG}/play-energy-score-good.png`,
        alt: 'Energy score 7.6: Good',
        x: 668,
        y: 82,
        w: 150,
        h: 137,
      },
      {
        src: `${IMG}/play-street-savers.png`,
        alt: 'Street savers: your energy compared next door. The McKinleys 9.8, you 9.7, the Bickmores 8.5, the Farrs 7.8',
        x: 106,
        y: 114,
        w: 269,
        h: 199,
      },
      {
        src: `${IMG}/play-neighborank.png`,
        alt: '#3 Neighborank: 234 kW saved',
        x: 1183,
        y: 277,
        w: 150,
        h: 156,
      },
      {
        src: `${IMG}/play-game-changer-phone.jpg`,
        alt: 'You’re a game changer: you’ve saved 75% more energy than your neighbor, with a Brag to Eric button',
        x: 584,
        y: 281,
        w: 195,
        h: 304,
        radius: 30,
        outlined: true,
      },
      {
        src: `${IMG}/play-energy-score-phone.png`,
        alt: 'Energy phone screen: score 7.6 Good, home, HVAC and battery status, and a neighborhood rank',
        x: 96,
        y: 387,
        w: 200,
        h: 499,
        radius: 16,
      },
      {
        src: `${IMG}/play-camera-goal-gauge.png`,
        alt: 'Savings gauge around an indoor camera: $23 left',
        x: 360,
        y: 390,
        w: 152,
        h: 176,
      },
      {
        src: `${IMG}/play-energy-score-bad.png`,
        alt: 'Energy score 1.2: Bad',
        x: 1136,
        y: 496,
        w: 150,
        h: 133,
      },
      {
        src: `${IMG}/play-energy-score-95.png`,
        alt: 'Energy score 95 out of 100 on a slider',
        x: 848,
        y: 566,
        w: 210,
        h: 174,
        radius: 16,
      },
      {
        src: `${IMG}/play-energy-score-orbit.png`,
        alt: 'Energy score 7.3 with an orbiting ring',
        x: 475,
        y: 609,
        w: 406,
        h: 360,
        wide: true,
        under: true,
      },
      {
        src: `${IMG}/play-treehouse-reward.png`,
        alt: 'Treehouse earned! Awesome job saving $20 this month on your energy bill',
        x: 1136,
        y: 692,
        w: 160,
        h: 241,
      },
      {
        src: `${IMG}/play-energy-score-7-5.png`,
        alt: 'Energy score 7.5: Good',
        x: 343,
        y: 697,
        w: 150,
        h: 133,
      },
    ],
  },
];

/* Group 24519:3500 — spend per category as shrinking circles */
const CIRCLES = [
  {
    pct: 21,
    label: 'Refrigeration',
    price: '$21.59',
    change: '$2 up from last bill',
    color: '#cce6ff',
    size: 85.78,
  },
  {
    pct: 14,
    label: 'Electric vehicles',
    price: '$16.51',
    change: '$2 up down last bill',
    color: '#d0ffdd',
    size: 81.86,
  },
  {
    pct: 8,
    label: 'Appliances',
    price: '$13.97',
    change: 'Same as last bill',
    color: '#ffe0f5',
    size: 73.41,
  },
  {
    pct: 4,
    label: 'Lighting',
    price: '$15.24',
    change: '$5 down from last bill',
    color: '#fff5bb',
    size: 56.91,
  },
  {
    pct: 2,
    label: 'Other',
    price: '$5.08',
    change: 'Same as last bill',
    color: '#d7ddfc',
    size: 42.48,
  },
];

/* Group 24519:3415 — cost list beside glowing category blobs */
const GLOW_ROWS = [
  { price: '$58.42', label: 'Heating & cooling', icon: 'heating' },
  { price: '$21.59', label: 'Water heating', icon: 'water' },
  { price: '$16.51', label: 'Appliances', icon: 'appliances' },
  { price: '$15.24', label: 'Lighting', icon: 'lighting' },
  { price: '$5.08', label: 'Electronics', icon: 'electronics' },
  { price: '$13.97', label: 'Other', icon: 'other' },
];

/* Glow blobs and their white icons, positioned in the 338×201 group */
const GLOWS = [
  { name: 'glow-appliances', x: 229, y: 98, size: 76 },
  { name: 'glow-water', x: 275, y: 52, size: 78 },
  { name: 'glow-lighting', x: 200, y: 148, size: 63 },
  { name: 'glow-electronics', x: 299, y: 135, size: 42 },
  { name: 'glow-other', x: 256, y: 153, size: 63 },
  { name: 'icon-heating-white', x: 233, y: 45, size: 16 },
  { name: 'icon-water-white', x: 306, y: 83, size: 16 },
  { name: 'icon-appliances-white', x: 259, y: 128, size: 16 },
  { name: 'icon-electronics-white', x: 312, y: 148, size: 16 },
  { name: 'icon-lighting-white', x: 224, y: 172, size: 16 },
];

function px(values: Record<string, number>) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [`--${key}`, value])
  ) as CSSProperties;
}

function CategoryCircles() {
  return (
    <ul className={classes.circles} aria-label="Spend by category">
      {CIRCLES.map(({ pct, label, price, change, color, size }) => (
        <li key={label} className={classes.circleItem}>
          <span className={classes.circleBox}>
            <span
              className={classes.circle}
              style={{ ...px({ size }), backgroundColor: color } as CSSProperties}
            >
              <span className={classes.circleValue}>{pct}</span>
              <span className={classes.circleUnit}>%</span>
            </span>
          </span>
          <span className={classes.circleLabel}>
            <Image
              className={classes.chevron}
              src={`${IMG}/play-chevron-left.svg`}
              alt=""
              width={10}
              height={10}
              unoptimized
            />
            {label}
            <Image
              className={classes.chevron}
              src={`${IMG}/play-chevron-right.svg`}
              alt=""
              width={10}
              height={10}
              unoptimized
            />
          </span>
          <span className={classes.circlePrice}>{price}</span>
          <span className={classes.circleChange}>{change}</span>
        </li>
      ))}
    </ul>
  );
}

function GlowList() {
  return (
    <div className={classes.glowList}>
      <ul className={classes.glowRows} aria-label="Bill by category">
        {GLOW_ROWS.map(({ price, label, icon }) => (
          <li key={label} className={classes.glowRow}>
            <span className={classes.glowPrice}>{price}</span>
            <Image
              className={classes.glowIcon}
              src={`${IMG}/play-icon-${icon}.svg`}
              alt=""
              width={16}
              height={17}
              unoptimized
            />
            <span className={classes.glowLabel}>{label}</span>
          </li>
        ))}
      </ul>
      <div className={classes.glowCluster} aria-hidden>
        <span className={classes.glowHeating} />
        {GLOWS.map(({ name, x, y, size }) => (
          <Image
            key={name}
            className={classes.glow}
            src={`${IMG}/play-${name}.svg`}
            alt=""
            width={size}
            height={size}
            unoptimized
            style={px({ x, y, size })}
          />
        ))}
      </div>
    </div>
  );
}

function CameraGoal() {
  return (
    <div className={classes.cameraGoal}>
      <span className={classes.cameraPanel} />
      <Image
        className={classes.cameraImage}
        src={`${IMG}/play-camera-product.png`}
        alt="Indoor camera"
        width={121}
        height={121}
        unoptimized
      />
      <span className={classes.cameraTrack}>
        <span className={classes.cameraFill} />
      </span>
      <span className={classes.cameraText}>$23 left</span>
      <Image
        className={classes.cameraArrow}
        src={`${IMG}/play-arrow-right.svg`}
        alt=""
        width={24}
        height={24}
        unoptimized
      />
    </div>
  );
}

const WIDGETS: Record<Widget, () => ReactNode> = {
  categoryCircles: CategoryCircles,
  glowList: GlowList,
  cameraGoal: CameraGoal,
};

function itemClass(item: Item) {
  const names = [classes.item];
  if (item.wide) {
    names.push(classes.wide);
  }
  if ('src' in item) {
    if (item.radius) {
      names.push(classes.rounded);
    }
    if (item.rightCorners) {
      names.push(classes.rightCorners);
    }
    if (item.outlined) {
      names.push(classes.outlined);
    }
    if (item.under) {
      names.push(classes.under);
    }
    if (item.cropLeft) {
      names.push(classes.cropLeft);
    }
  } else {
    names.push(classes.widget);
  }
  return names.join(' ');
}

export function EvPlayground() {
  return (
    <section className={classes.root} aria-labelledby="ev-playground-title">
      <div className={classes.container}>
        <h2 id="ev-playground-title" className={classes.title}>
          Into the playground...
        </h2>
      </div>

      {GROUPS.map(({ label, height, items }) => (
        <div key={label} className={classes.group}>
          <div className={classes.container}>
            <div className={classes.labelRow}>
              <h3 className={classes.label}>{label}</h3>
              <span className={classes.dots} aria-hidden />
            </div>
          </div>

          <ul className={classes.canvas} style={px({ h: height })}>
            {items.map((item) => {
              const { x, y, w, h } = item;
              const style = px({ x, y, w, h, r: 'src' in item ? (item.radius ?? 0) : 0 });
              if ('widget' in item) {
                const Widget = WIDGETS[item.widget];
                return (
                  <li key={item.widget} className={itemClass(item)} style={style}>
                    <Widget />
                  </li>
                );
              }
              return (
                <li key={item.src} className={itemClass(item)} style={style}>
                  <Image
                    className={classes.img}
                    src={item.src}
                    alt={item.alt}
                    width={Math.round(w)}
                    height={Math.round(h)}
                    unoptimized
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
