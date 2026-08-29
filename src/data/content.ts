export const profile = {
  name: 'Prateek Sahu',
  firstName: 'Prateek',
  lastName: 'Sahu',
  title: 'Frontend Developer',
  location: 'Bengaluru, India',
  experienceYears: '3+ years',
  email: 'mailprateeksahu@gmail.com',
  phone: '+91 91650 16152',
  phoneHref: 'tel:+919165016152',
  resumeUrl: '/PrateekSahu_Resume.pdf',
  resumeFileName: 'PrateekSahu_Resume.pdf',
  currentRole: 'Software Engineer II',
  currentCompany: 'FireFlink Pvt. Ltd.',
  currentDates: 'July 2024 — August 2026',
  social: {
    github: 'https://github.com/PrateekSahu9808',
    linkedin: 'https://www.linkedin.com/in/prateek-sahu/',
  },
  heroIntro:
    'Frontend developer with 3+ years of experience building scalable, performant web applications in React.js, TypeScript, and Next.js. I specialize in micro frontend architecture, reusable component systems, and state management with Redux Toolkit and RTK Query.',
  about: [
    'I am a frontend developer with 3+ years of experience shipping scalable React.js, TypeScript, and Next.js applications. My work is centered on micro frontend architecture, reusable component systems, and Redux Toolkit / RTK Query — with a consistent focus on performance and design consistency in Agile product teams.',
    'At FireFlink I worked as Software Engineer II on a multi-module micro frontend platform: independent deployments across 5+ enterprise modules, a Storybook component library used across those apps, Core Web Vitals work, and WCAG-compliant UI. I also mentored four junior developers through code reviews and React performance practices.',
    'Previously at Test Yantra I worked as a Software Engineer on responsive React interfaces, REST-backed forms, tables, filters, and dashboards, after a Software Development Trainee period (Dec 2022 – May 2023). Across these roles I collaborated with backend and design partners on authentication, RBAC, workflow UI, and pixel-accurate implementation from Figma.',
  ],
  highlights: [
    { label: 'Experience', value: '3+ years' },
    { label: 'Focus', value: 'React · TypeScript' },
    { label: 'Location', value: 'Bengaluru' },
    { label: 'Most recent', value: 'Software Engineer II' },
  ],
} as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;

export const experience = [
  {
    id: 'fireflink',
    company: 'FireFlink Pvt. Ltd.',
    parent: null,
    role: 'Software Engineer II',
    badge: null,
    location: 'Bengaluru, India',
    start: 'July 2024',
    end: 'August 2026',
    summary:
      'Frontend engineering on a multi-module enterprise platform: micro frontends, shared UI, performance, accessibility, and mentoring.',
    bullets: [
      'Engineered a scalable micro frontend architecture with independent deployment across 5+ enterprise modules, improving maintainability and release velocity.',
      'Led adoption of a Storybook-based reusable component library, standardizing UI across multiple micro frontend applications.',
      'Built reusable React components with Hooks, TypeScript, Redux Toolkit, RTK Query, and Context API.',
      'Optimized rendering with memoization, virtualization, lazy loading, Web Workers, and efficient state management; audited Core Web Vitals with Chrome DevTools and Lighthouse.',
      'Improved accessibility with WCAG-compliant components, semantic HTML, keyboard navigation, and ARIA attributes across key modules.',
      'Wrote unit and integration tests with Jest and React Testing Library, and collaborated with designers in Figma for pixel-accurate UI.',
      'Worked with backend teams on REST APIs for authentication, RBAC, and workflow modules, and contributed to SSR-based reporting features using Node.js.',
      'Mentored four junior developers through code reviews and React performance practices.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Redux Toolkit',
      'RTK Query',
      'Module Federation',
      'Storybook',
      'Jest',
      'React Testing Library',
      'Figma',
    ],
  },
  {
    id: 'testyantra',
    company: 'Test Yantra Pvt. Ltd.',
    parent: null,
    role: 'Software Engineer',
    badge: null,
    location: 'Bengaluru, India',
    start: 'May 2023',
    end: 'June 2024',
    summary:
      'React frontend work on responsive UI, REST-backed workflows, and Redux state in an Agile delivery team.',
    bullets: [
      'Developed responsive, reusable UI components with React.js, JavaScript, HTML5, CSS3, and SCSS.',
      'Integrated REST APIs and implemented dynamic forms, tables, filters, dashboards, and data visualization components.',
      'Optimized application performance while keeping layouts responsive and cross-browser compatible.',
      'Managed application state with Redux and collaborated in Agile sprint planning and feature delivery.',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Redux',
      'REST APIs',
    ],
  },
  {
    id: 'testyantra-trainee',
    company: 'Test Yantra Pvt. Ltd.',
    parent: null,
    role: 'Software Development Trainee',
    badge: 'Training',
    location: 'Bengaluru, India',
    start: 'December 2022',
    end: 'May 2023',
    summary:
      'Hands-on software development training before moving into the Software Engineer role.',
    bullets: [
      'Completed guided coding assignments and mini-projects under senior developer mentorship to build practical proficiency in web development fundamentals.',
    ],
    technologies: [],
  },
] as const;

export const projects = [
  {
    id: 'fireflink',
    name: 'FireFlink',
    type: 'Product · Test automation',
    featured: true,
    description:
      'Developed reusable React components and enterprise UI features for a scriptless NLP-powered automation platform supporting web and mobile testing.',
    role: 'Frontend engineer — reusable components and enterprise UI',
    contribution:
      'Built production React UI for FireFlink, a scriptless NLP-powered automation platform used for web and mobile testing.',
    features: [
      'Reusable React components for enterprise product UI',
      'Scriptless, NLP-powered test automation workflows',
      'Support for web and mobile testing surfaces',
    ],
    technologies: ['React.js', 'TypeScript', 'SCSS'],
    link: 'https://www.fireflink.com/',
    linkLabel: 'fireflink.com',
  },
  {
    id: 'pixel-react',
    name: 'Pixel-React',
    type: 'Company library · npm',
    featured: false,
    description:
      'Primary publisher and maintainer of Pixel-React, a company React component library built with Storybook and TypeScript. It is published on npm for use in applications, with 6K+ downloads and adoption across enterprise products.',
    role: 'Primary publisher and maintainer',
    contribution:
      'Publish and maintain Pixel-React as a company npm library used across enterprise applications.',
    features: [
      'Company React component library published on npm',
      'Built with Storybook and TypeScript',
      '6K+ npm downloads across enterprise applications',
    ],
    technologies: ['React.js', 'TypeScript', 'Storybook'],
    link: 'https://www.npmjs.com/package/pixel-react',
    linkLabel: 'npm package',
  },
  {
    id: 'fireflink-assessment',
    name: 'FireFlink Assessment',
    type: 'Product · Assessments',
    featured: false,
    description:
      'Built SSR-powered features using Next.js for online assessments, certificate generation, and SEO optimization.',
    role: 'Frontend engineer — SSR, assessments, and SEO',
    contribution:
      'Shipped server-rendered Next.js features for online assessments, certificates, and search visibility.',
    features: [
      'SSR-powered assessment flows with Next.js',
      'Certificate generation',
      'SEO optimization for assessment pages',
    ],
    technologies: ['Next.js', 'React.js', 'REST APIs'],
    link: 'https://assessmentv3.fireflink.com/',
    linkLabel: 'assessmentv3.fireflink.com',
  },
  {
    id: 'leavera',
    name: 'Leavera',
    type: 'Product · Leave management',
    featured: false,
    description:
      'Built the React-based frontend for a leave management system, implementing RBAC-driven UI, Comp-Off tracking views, and approval workflows integrated with REST APIs.',
    role: 'Frontend engineer — leave management UI',
    contribution:
      'Implemented the React frontend for leave management, including access control, Comp-Off tracking, and approval workflows.',
    features: [
      'RBAC-driven user interface',
      'Comp-Off tracking views',
      'Approval workflows integrated with REST APIs',
    ],
    technologies: ['React.js', 'Redux', 'REST APIs'],
    link: 'https://leavera.com/',
    linkLabel: 'leavera.com',
  },
] as const;

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    title: 'Frontend',
    items: [
      'React.js (18/19)',
      'Next.js',
      'Redux Toolkit',
      'RTK Query',
      'Context API',
      'React Router',
      'HTML5',
      'CSS3',
      'SCSS/SASS',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
    ],
  },
  {
    title: 'Architecture & tools',
    items: [
      'Micro Frontend (Module Federation)',
      'Storybook',
      'Webpack',
      'Vite',
      'Parcel',
      'PNPM Workspaces',
      'Git',
      'GitHub',
      'Bitbucket',
    ],
  },
  {
    title: 'Testing & design',
    items: ['Jest', 'React Testing Library', 'Figma'],
  },
  {
    title: 'Working knowledge',
    items: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Practices',
    items: [
      'Performance optimization',
      'Core Web Vitals',
      'Code splitting',
      'Lazy loading',
      'Memoization',
      'Virtualization',
      'Web Workers',
      'API caching',
      'RBAC',
      'Accessibility (WCAG)',
      'Responsive design',
      'Component-driven development',
      'Agile / Scrum',
    ],
  },
] as const;

export const education = {
  school: 'Rajiv Gandhi Technical University',
  degree: 'Bachelor of Engineering (B.E.)',
  location: 'Bhopal, Madhya Pradesh',
  start: 'August 2016',
  end: 'September 2020',
} as const;

export const certifications: readonly { name: string; issuer: string }[] = [];

export const achievements = [
  {
    title: 'Micro frontend platform',
    detail:
      'Independent deployment across 5+ enterprise modules, improving frontend maintainability and release velocity.',
  },
  {
    title: 'Mentorship',
    detail:
      'Mentored four junior developers through code reviews and React performance optimization practices.',
  },
  {
    title: 'Pixel-React on npm',
    detail:
      'Primary publisher and maintainer of a company Storybook / TypeScript component library with 6K+ npm downloads.',
  },
] as const;
