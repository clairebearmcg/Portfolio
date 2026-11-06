import classes from './Resume.module.css';

const EMAIL = 'claire.nmcgreg@gmail.com';
const PHONE = '(949) 353-4383';

// TODO: add public/claire-mcgregor-resume.pdf
const PDF_HREF = '/claire-mcgregor-resume.pdf';

// Content follows the PDF resume (Figma 24565:5234)
const EXPERIENCE = [
  {
    role: 'UX DESIGNER',
    org: 'Vivint',
    dates: 'Aug 25 - present',
    description: [
      'Led UX design and strategy for HVAC Services, helping shape a new service experience for homeowners.',
      'Designed and launched runtime-based HVAC filter replacement alerts and early issue diagnosis alerts that provide more accurate, system-specific recommendations.',
      'Contributed to energy management experiences that help homeowners better understand and manage their energy usage.',
      'Partnered with product managers and engineers to translate product requirements into cohesive, user-centered experiences from concept through launch.',
    ],
    // TODO: still a placeholder in the PDF, shown in red until the real achievement is added
    placeholder: '[Specific quantified achievement or business impact.]',
  },
  {
    role: 'UX DESIGNER',
    org: 'Arcade Freelance',
    dates: 'Sep 24 - Apr 25',
    description: [
      'Built and launched a product during a two-semester BYU program. Designed a platform that connects game studios with freelancers in collaboration with a product manager and developer.',
    ],
  },
];

const EDUCATION = [
  {
    school: 'BRIGHAM YOUNG UNIVERSITY',
    details: ['BA in UX Design', 'Minor in Music', 'Aug 21 - Apr 25'],
  },
];

const PATENTS = [
  {
    title: 'Intelligent HVAC Filter Replacement Alerts',
    // TODO: still a placeholder in the PDF, shown in red until the real number is added
    number: '[number]',
    granted: 'Granted May 2026',
    summary:
      'Runtime-based filter replacement system improving filter-life accuracy and homeowner maintenance recommendations.',
  },
];

// Two rows, as laid out in the design
const SKILLS = [
  [
    'UX/UI Design',
    'Interaction Design',
    'User Research',
    'Prototyping',
    'Design Systems',
    'Data Visualization',
  ],
  [
    'Figma',
    'Claude Code',
    'Framer',
    'Adobe Illustrator',
    'Photoshop',
    'After Effects',
    'Lightroom',
  ],
];

// Two columns of accolades
const ACCOLADES = [
  ['Vivint Internship Capstone Award', 'BYU Top UX Designer, Graduating Senior Award'],
  ['2024 Interaction Design Award shortlist feature', 'Finalist in the FAA-AID UX Challenge'],
];

// Two columns of activities, with an optional duration after each
const BEYOND_DESIGN: { name: string; duration?: string }[][] = [
  [
    { name: 'Harp Lessons and Performance', duration: '7 years' },
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
              <li key={job.org} className={classes.entry}>
                <div className={classes.meta}>
                  <h3 className={classes.title}>{job.role}</h3>
                  <p className={classes.metaLine}>{job.org}</p>
                  <p className={classes.metaLine}>{job.dates}</p>
                </div>
                <div className={classes.description}>
                  {job.description.map((paragraph) => (
                    <p key={paragraph} className={classes.text}>
                      {paragraph}
                    </p>
                  ))}
                  {job.placeholder && (
                    <p className={classes.text}>
                      <mark className={classes.placeholder}>{job.placeholder}</mark>
                    </p>
                  )}
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
          <h2 className={classes.label}>Patents</h2>
          <div className={classes.content}>
            {PATENTS.map((patent) => (
              <div key={patent.title}>
                <p className={classes.text}>{patent.title}</p>
                <p className={classes.text}>
                  Co-inventor · U.S. Patent{' '}
                  <mark className={classes.placeholder}>{patent.number}</mark> · {patent.granted}
                </p>
                <p className={classes.text}>{patent.summary}</p>
              </div>
            ))}
          </div>
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
          <h2 className={classes.label}>Beyond design</h2>
          <div className={classes.columns}>
            {BEYOND_DESIGN.map((column) => (
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
