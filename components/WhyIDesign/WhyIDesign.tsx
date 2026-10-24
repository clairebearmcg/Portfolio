import Link from 'next/link';
import classes from './WhyIDesign.module.css';

const STORY = [
  'The class required us to research and present on a number of famous designers. After a quick Google search of my assigned list, I noticed that most of them were furniture or household product designers. I was genuinely perplexed about how I was going to talk about something like “chairs” for 20 minutes over and over again throughout the course of the semester.',
  'When it came time for me to give my presentations, I found myself unexpectedly enjoying studying these figures from the 20s, 60s, & early 2000s that pushed boundaries through so many different mediums. Even though their creations were physical, their stories applied to design as a whole. I found their works so inspiring. Here were some of my favorites:',
  'Naoto Fukasawa was a master at blending design into the background. He noticed that an extractor fan’s blades matched the spinning of a CD player. This inspired his wall-mounted CD player that included a hanging power cord, seamlessly mimicking turning on a ventilation fan. His design perfectly captured the instinctive interaction learned from previous design infused in all of us. I learned through him that design feeds off of itself. Everything is an iteration of something else. What you create compounds.',
  'Arne Jacobsen understood the overwhelming atmosphere of waiting for a flight at a busy airport. Commissioned by the SAS Royal Hotel, he created an egg shaped chair the shielded excess commotion and fostered a more private experience for passengers waiting in a busy space. He adapted design to solve human needs. Additionally, he fashioned the future by designing cutlery in stainless steel, an affordable alternative to silver, proving the ability and necessity for design to adapt with economic realities. His modern take on utensils was featured in Stanley Kubrick’s 2001: A Space Odyssey. He was a visionary, to say the least.',
  'Rei Kawakubo, an acclaimed fashion designer, “questioned convention” with her “Body Meets Dress, Dress Meets Body” 1997 collection. Models wore gingham dresses with large, warped pads bulging underneath- changing the shape of the outfit and the body entirely. Rei challenged the beauty standards and traditional shape of the silhouette that clothing often accentuates. Though her work was uncomfortable to look at, it was memorable and innovative in a stagnant industry. She shows how design holds power in it’s ability to spark thoughts, feelings, and even change in people. It is a great example of how design can expose uncomfortable problems and speak in ways words often can’t.',
  'By the end of the semester, I felt for the first time that I understood why design matters. I felt a passion to continue the legacy that so many of these historical designers created through my own interpretation of user experience design. I’m excited to continue the story of where design will go next. To help pioneer a coexistence between design and AI, and hopefully use my skills to make a difference.',
  'I’ve started to recognize how design takes shape in my own life. A couple months ago, I was driving on the 110 freeway in LA with my dad. As he zoomed around turns, he talked about how much he loves driving on that freeway because it feels like a racetrack. I asked him why it was designed that way, and he told me it was built on an old riverbed. The road follows the path the river once took. I love this manifestation of the idea that design is everywhere. GOOD design follows nature. It’s natural, intuitive, and flowing. It evokes delight, like mimicking the feeling of driving a race car. It carries the history of what shaped it while leaving room for what comes next. And, it tells a story that leaves an impact, like the one my Dad told me. As a creator, these are the principles that shape my craft and inspire my curiosity. I want to create something that makes the world better.',
];

export function WhyIDesign() {
  return (
    <article className={classes.page}>
      {/* Same style and spot as the links on the About me page */}
      <div className={classes.backBar}>
        <Link className={classes.back} href="/me">
          ←<span className={classes.backText}>Back</span>
        </Link>
      </div>
      <div className={classes.container}>
        <header className={classes.titleGroup}>
          <h1 className={classes.title}>Ok, sit down and listen to my story about chairs.</h1>
          <p className={classes.aside}>
            <span className={classes.arrow} aria-hidden="true">
              ^
            </span>
            lol
          </p>
        </header>

        <div className={classes.story}>
          <p>
            When I was in college, I had to take this boring class about chairs and industrial
            design history. Once, we spent an entire class period tracing pictures of chairs.
            Another time, we talked about a flagpole for 45 mins. As an aspiring UX designer, I
            rolled my eyes during these lectures about tables and teapots. I couldn’t understand how
            this class could possibly apply to someone like me who would be working on{' '}
            <u>digital</u> products.
          </p>
          {STORY.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <p className={classes.closing}>
          <span className={classes.closingText}>And...that’s why I design.</span>
          <span className={classes.smile}>:)</span>
        </p>
      </div>
    </article>
  );
}
