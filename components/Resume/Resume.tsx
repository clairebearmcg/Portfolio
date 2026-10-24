import classes from './Resume.module.css';

const EMAIL = 'claire.nmcgreg@gmail.com';
const PHONE = '(949) 353-4383';

// TODO: add public/claire-mcgregor-resume.pdf
const PDF_HREF = '/claire-mcgregor-resume.pdf';

const EXPERIENCE = [
  {
    role: 'UX DESIGNER I',
    org: 'Vivint',
    dates: 'Aug 25 - present',
    description: [
      'Leading 0→1 design and strategy of user experiences for HVAC systems, enabling users to manage routine maintenance (e.g., filter replacement), identify potential issues, and reduce system failures.',
      'Leading design and strategy of the energy experience to provide insights about energy usage, costs, and sustainability to users. Translating energy from complex data to understandable and engaging experiences.',
    ],
  },
  {
    role: 'SANDBOX',
    org: 'Arcade Freelance',
    dates: 'Sep 24 - Apr 24',
    description: [
      'Built and launched a product in a two-semester BYU program. Designed a platform that connects game studios with freelancers in collaboration with a product manager and developer.',
    ],
  },
  {
    role: 'UX DESIGNER',
    org: 'McKay School of Education',
    dates: 'May 24 - Dec 24',
    description: [
      'UX designer and researcher for BYU’s McKay School of Education website. Conducted competitive analysis reports, user research studies and interviews, and iterative redesigns of web pages.',
    ],
  },
  {
    role: 'FREELANCE',
    org: 'Oso Pediatrics',
    dates: 'Summer 24',
    description: [
      'Developed 0 →1 branding for Oso Pediatrics clinic in collaboration with CHOC hospital. Work included logo, poster, and banner designs to promote the new clinic.',
    ],
  },
  {
    role: 'FAA PROJECT',
    dates: 'Feb 23 - Jun 23',
    description: [
      'Finalist in a team-based competition designing an interactive user interface for the Federal Aviation Administration’s new automation system. The designed system will increase efficiency for traffic flow management and instruction in the airspace field.',
    ],
  },
];

const EDUCATION = [
  {
    school: 'BRIGHAM YOUNG UNIVERSITY',
    details: ['BA in UX Design', 'Minor in Music', 'Aug 21 - Apr 25'],
  },
  {
    school: 'TESORO HIGH SCHOOL',
    details: ['Jun 21', 'GPA 4.1'],
  },
];

// Two rows, as laid out in the design
const SKILLS = [
  [
    'Figma',
    'Figma Prototyping',
    'Framer',
    'Design Thinking',
    'Typography',
    'Data Visualization',
    'User Research',
  ],
  [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe After Effects',
    'Adobe Lightroom',
    'Motion Design',
    'Music',
    'Adaptive',
  ],
];

const PATENTS = [
  {
    title: 'Co-inventor for “Intelligent HVAC Filter Replacement Alerts” U.S. Patent No.',
    // TODO: still a placeholder in the design, shown in red until the real number is added
    number: 'CHANGE THIS',
    granted: '(Granted May 2026)',
    summary:
      'Filter reminder system based on runtime rather than time-based intervals. This feature improves filter life and maintenance accuracy.',
  },
];

// Two columns of accolades
const ACCOLADES = [
  [
    'Vivint Internship Capstone Award',
    'BYU Top Designer, Graduating Senior Award',
    'BYU & U of U Product Hackathon Judge',
    'Featured in the 2024 Interaction Design Award shortlist',
  ],
  [
    'Finalist in the FAA-AID UX Challenge',
    'National Honor Society for Tesoro High School',
    'State of California Piano Certificate of Merit: Level V',
  ],
];

// Two columns of activities, with an optional duration after each
const EXTRACURRICULARS: { name: string; duration?: string }[][] = [
  [
    { name: 'Harp Lessons and Performance', duration: '6 years' },
    { name: 'Piano Lessons and Performance', duration: '13 years' },
  ],
  [
    { name: 'BYU Harp Ensemble', duration: '6 years' },
    { name: 'BYU UX Design Club Co-President and Secretary' },
  ],
];

export function Resume() {
  return (
    <div className={classes.resume}>
      <div className={classes.container}>
        <header className={classes.top}>
          <div>
            <h1 className={classes.name}>Claire McGregor</h1>
            <p className={classes.contact}>
              <a href={`mailto:${EMAIL}`} className={classes.link}>
                {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\D/g, '')}`} className={classes.link}>
                {PHONE}
              </a>
            </p>
          </div>
          <a href={PDF_HREF} download className={classes.pdf}>
            PDF
          </a>
        </header>

        <section className={`${classes.section} ${classes.experience}`}>
          <h2 className={classes.label}>Experience</h2>
          <ul className={classes.entries}>
            {EXPERIENCE.map((job) => (
              <li key={job.role} className={classes.entry}>
                <div className={classes.meta}>
                  <h3 className={classes.title}>{job.role}</h3>
                  {job.org && <p className={classes.metaLine}>{job.org}</p>}
                  <p className={classes.metaLine}>{job.dates}</p>
                </div>
                <div className={classes.description}>
                  {job.description.map((paragraph) => (
                    <p key={paragraph} className={classes.text}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={classes.section}>
          <h2 className={classes.label}>Education</h2>
          <ul className={`${classes.columns} ${classes.schools}`}>
            {EDUCATION.map((item) => (
              <li key={item.school}>
                <h3 className={`${classes.title} ${classes.school}`}>{item.school}</h3>
                {item.details.map((detail) => (
                  <p key={detail} className={classes.metaLine}>
                    {detail}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <section className={classes.section}>
          <h2 className={classes.label}>Skills</h2>
          <div className={classes.content}>
            {SKILLS.map((row) => (
              <ul key={row[0]} className={classes.skills}>
                {row.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className={classes.section}>
          <h2 className={classes.label}>Patents</h2>
          <div className={classes.content}>
            {PATENTS.map((patent) => (
              <div key={patent.title}>
                <p className={classes.text}>
                  {patent.title} <mark className={classes.placeholder}>{patent.number}</mark>{' '}
                  {patent.granted}
                </p>
                <p className={classes.text}>{patent.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={classes.section}>
          <h2 className={classes.label}>Accolades</h2>
          <div className={classes.columns}>
            {ACCOLADES.map((column) => (
              <ul key={column[0]} className={classes.list}>
                {column.map((accolade) => (
                  <li key={accolade}>{accolade}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className={classes.section}>
          <h2 className={classes.label}>Extracurriculars</h2>
          <div className={classes.columns}>
            {EXTRACURRICULARS.map((column) => (
              <ul key={column[0].name} className={classes.list}>
                {column.map((item) => (
                  <li key={item.name}>
                    {item.name}
                    {item.duration && <span className={classes.duration}>{item.duration}</span>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
