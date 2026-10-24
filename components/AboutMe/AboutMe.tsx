import Image from 'next/image';
import { aboutFontVariables } from './fonts';
import classes from './AboutMe.module.css';

const IMG = '/about';

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

// Left and middle photo columns of the Figma collage (24510:2770), top to bottom
const LEFT_PHOTOS: Photo[] = [
  {
    src: `${IMG}/me-moi.jpg`,
    alt: 'Portrait of Claire smiling in a cream cable-knit sweater in front of green leaves',
    caption: 'Moi',
  },
  {
    src: `${IMG}/me-harp-concert.jpg`,
    alt: 'Claire in a black dress standing beside a concert harp on stage',
    caption: 'My senior harp concert!',
  },
  {
    src: `${IMG}/me-rave.jpg`,
    alt: 'Blurry photo of Claire dancing in a crowd under purple stage lights',
    caption: 'My rave-induced alter ego',
  },
];

const MIDDLE_PHOTOS: Photo[] = [
  {
    src: `${IMG}/me-greece.jpg`,
    alt: 'Claire and three friends sitting together at sunset above the sea in Greece',
    caption: 'Greece with friends!',
  },
  {
    src: `${IMG}/me-glizzies.jpg`,
    alt: 'Claire grinning at a hot dog in her hand on a busy plaza',
    caption: 'me + glizzies = <3',
  },
  {
    src: `${IMG}/me-messy.jpg`,
    alt: 'Claire laughing on a checkered patio, holding a red drink that has spilled on her jeans',
    caption: 'The only thing messier than my Figma files might be me',
  },
];

function PhotoColumn({ photos, className }: { photos: Photo[]; className: string }) {
  return (
    <ul className={`${classes.photos} ${className}`}>
      {photos.map(({ src, alt, caption }) => (
        <li key={src}>
          <figure className={classes.figure}>
            <Image
              className={classes.photo}
              src={src}
              alt={alt}
              width={177}
              height={236}
              unoptimized
            />
            <figcaption className={classes.caption}>{caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function AboutMe() {
  return (
    <div className={`${classes.about} ${aboutFontVariables}`}>
      <div className={classes.container}>
        <ul className={classes.links}>
          <li>
            <a className={classes.link} href="/why-i-design">
              <span className={classes.linkText}>Why I design</span>→
            </a>
          </li>
          <li>
            <a className={classes.link} href="mailto:claire.nmcgreg@gmail.com">
              <span className={classes.linkText}>Email</span>→
            </a>
          </li>
          <li>
            <a
              className={classes.link}
              href="https://www.linkedin.com/in/clairemcgreg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.linkText}>LinkedIn</span>→
            </a>
          </li>
        </ul>

        <div className={classes.collage}>
          {/* One sentence in many typefaces. Each line is a block; the spaces between them
              keep the words separate for screen readers and copy/paste. */}
          <h1 className={classes.words}>
            <span className={`${classes.line} ${classes.l1}`}>
              <span className={classes.jacquardLg}>I’m</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l2}`}>
              <span className={classes.serifLg}>Claire,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l3}`}>
              <span className={classes.cochin}>A</span>{' '}
              <span className={classes.cal}>Californian,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l4}`}>
              <span className={classes.jacquard}>harp</span>
              <span className={classes.serif}>-playing</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l5}`}>
              <span className={classes.chathura}>redhead</span>{' '}
              <span className={classes.quantico}>obsessed</span>{' '}
              <span className={classes.public}>with</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l6}`}>
              <span className={classes.staatliches}>Freeway</span>{' '}
              <span className={classes.sulphur}>ARCHITECTURE,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l7}`}>
              <span className={classes.museo}>INTERNATIONAL</span>{' '}
              <span className={classes.helvetica}>cinema,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l8}`}>
              <span className={classes.fascinate}>my</span>{' '}
              <span className={classes.sarina}>Fujifilm</span>{' '}
              <span className={classes.hubot}>CAMERA,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l9}`}>
              <span className={classes.roca}>stoopid</span>{' '}
              <span className={classes.shrikhand}>bucket</span>{' '}
              <span className={classes.poorStory}>LISTS,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l10}`}>
              <span className={classes.silom}>TRAVEL</span>{' '}
              <span className={classes.romanesco}>planning,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l11}`}>
              <span className={classes.sixCaps}>MUSIC</span>{' '}
              <span className={classes.postNoBills}>PRODUCTION,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l12}`}>
              <span className={classes.novaSlim}>THE</span>{' '}
              <span className={classes.novaCut}>Olympics,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l13}`}>
              <span className={classes.dokdo}>DATA</span>{' '}
              <span className={classes.silkscreen}>vIZZZ,</span>
            </span>{' '}
            <span className={`${classes.line} ${classes.l14}`}>
              <span className={classes.staatlichesSm}>&amp; typography...obviously.</span>
            </span>
          </h1>

          <PhotoColumn photos={LEFT_PHOTOS} className={classes.left} />
          <PhotoColumn photos={MIDDLE_PHOTOS} className={classes.middle} />
        </div>
      </div>
    </div>
  );
}
