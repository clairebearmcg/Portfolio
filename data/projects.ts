export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'anomaly-detection',
    title: 'Anomaly Detection',
    description:
      'Guiding customers through the stressful situation of a heating & cooling breakdown.',
    image: '/projects/anomaly-detection.png',
    featured: true,
  },
  {
    slug: 'filter-smart-alerts',
    title: 'Filter Smart Alerts',
    description:
      'Bringing eduction and ease into alerts triggered by actual system usage, not just time passed.',
    image: '/projects/filter-smart-alerts.png',
    featured: true,
  },
  {
    slug: 'energy-visualized',
    title: 'Energy Visualized',
    description:
      'Rethinking how people experience energy data through creative, intuitive visualizations that make insights accessible.',
    image: '/projects/energy-visualized.png',
    featured: false,
  },
  {
    slug: 'comfort-drift',
    title: 'Comfort Drift',
    description:
      'Helping homeowners catch temperature issues and inefficiencies before they snowball.',
    image: '/projects/comfort-drift.png',
    featured: false,
  },
  {
    slug: 'ev-smart-charging',
    title: 'EV Smart Charging',
    description:
      'From insights to iteration. Turning user behavior into thoughtful design improvements.',
    image: '/projects/ev-smart-charging.png',
    featured: false,
  },
  {
    slug: 'thermostat-alerts',
    title: 'Thermostat Alerts',
    description:
      'Creating a pattern for notifications spanning from critical alerts to simple recommendations for an uncommon interface.',
    image: '/projects/thermostat-alerts.png',
    featured: false,
  },
  {
    slug: 'solar-lead-gen',
    title: 'Solar Lead Gen',
    description: 'Going beyond what was asked for the benefit of the user. Fixing up an old flow.',
    image: '/projects/solar-lead-gen.png',
    featured: false,
  },
];
