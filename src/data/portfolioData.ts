import { Project, TechItem, ExperienceItem, EducationItem, Hobby, Testimonial } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'civil-service-college',
    title: 'Civil Service College Accessibility & Enquiry Platform',
    subtitle: 'Public Service Accessibility Overhaul & Form Engine',
    description: 'A comprehensive frontend overhaul and accessible form engine for Civil Service College digital services. Removed accessibility barriers for assistive technologies, adhering strictly to WCAG 2.1 AA guidelines and UK Government Service Standards.',
    category: 'Web App',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'SASS', 'WCAG 2.1 AA', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    featured: true,
    liveDemoUrl: 'https://www.civilservicecollege.org.uk',
    githubUrl: 'https://github.com/elnobun/civil-service-accessibility',
    metrics: [
      { label: 'Accessibility Standard', value: 'WCAG 2.1 AA' },
      { label: 'Form Completion Rate', value: '+38%' },
      { label: 'Lighthouse Score', value: '98 / 100' }
    ],
    caseStudy: {
      problem: 'Legacy enquiry and application forms presented significant keyboard navigation and screen reader barriers, preventing public service users from submitting requests seamlessly.',
      solution: 'Engineered a semantic, keyboard-accessible form system with instant ARIA live feedback, structured error messages, clear focus rings, and responsive layout reflow.',
      architecture: 'Accessible DOM Components -> Custom ARIA Hook Engine -> Express Validation Gateway -> Secure REST API.',
      highlights: [
        'Complete keyboard focus management and screen reader live-region notifications',
        'Real-time input validation with WCAG-compliant high contrast error messaging',
        'GDPR data minimisation and consent control toggles built into form submission flow',
        'Cross-browser tested across NVDA, JAWS, VoiceOver, and touch devices'
      ],
      codeSnippet: {
        filename: 'formValidation.ts',
        language: 'typescript',
        code: `// WCAG 2.1 AA Compliant Accessible Form Validation Engine
export interface FieldState {
  value: string;
  error?: string;
  touched: boolean;
}

export function validateEmail(email: string): string | undefined {
  if (!email) return 'Email address is required.';
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return 'Please enter a valid email address (e.g. name@domain.com).';
  }
  return undefined;
}`
      }
    },
    interactiveDemoType: 'ai-assistant'
  },
  {
    id: 'herts-sports-platform',
    title: 'University of Hertfordshire Sports Platform',
    subtitle: 'Accessible Student & Member Sports Portal (15,000+ Students)',
    description: 'High-performance, accessible sports and activity platform serving over 15,000 university students and community members across sport.herts.ac.uk.',
    category: 'Web App',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'SASS', 'WCAG 2.1 AA', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
    featured: true,
    liveDemoUrl: 'https://sport.herts.ac.uk',
    githubUrl: 'https://github.com/elnobun/herts-sports-platform',
    metrics: [
      { label: 'Active Students', value: '15,000+' },
      { label: 'Lighthouse Rating', value: '96 / 100' },
      { label: 'Core Web Vitals', value: 'Passed All' }
    ],
    caseStudy: {
      problem: 'High student traffic during sports facility booking windows caused page layout shifts and slow response times on mobile devices.',
      solution: 'Re-architected client-side UI with modular JavaScript, pre-rendered DOM shells, optimized SASS asset bundles, and implemented responsive timetable grid views.',
      architecture: 'Modular JavaScript Architecture -> REST API Integration -> SASS Responsive Grid -> Edge Caching.',
      highlights: [
        'Responsive facility booking grid supporting touch gestures and keyboard navigation',
        'Sub-second image loading using webp conversions and responsive image srcsets',
        'Zero Cumulative Layout Shift (CLS) across mobile viewports'
      ]
    },
    interactiveDemoType: 'analytics'
  },
  {
    id: 'gosscoatings-bespoke-wordpress',
    title: 'Goss Coatings Bespoke Platform',
    subtitle: 'Bespoke WordPress Engineering (No Page Builder)',
    description: 'Custom bespoke WordPress site crafted without page builders for gosscoatings.co.uk. Engineered for peak speed and security using PHP, SCSS, TypeScript, JavaScript, and semantic HTML5.',
    category: 'Backend & WebApp',
    tags: ['PHP', 'SCSS', 'TypeScript', 'JavaScript', 'Bespoke WordPress', 'HTML5'],
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop&q=80',
    featured: true,
    liveDemoUrl: 'https://gosscoatings.co.uk',
    githubUrl: 'https://github.com/elnobun/gosscoatings-wordpress',
    metrics: [
      { label: 'Page Builder Bloat', value: '0% (Clean PHP)' },
      { label: 'Lighthouse Speed', value: '99 / 100' },
      { label: 'Asset Bundle Size', value: '< 45 KB' }
    ],
    caseStudy: {
      problem: 'Needed a custom, ultra-fast commercial platform without relying on slow third-party page builders like Elementor or WPBakery.',
      solution: 'Developed a bespoke WordPress theme architecture from scratch using object-oriented PHP templates, SCSS design tokens, and modular TypeScript controllers.',
      architecture: 'Custom PHP WordPress Theme -> SCSS Style Architecture -> TypeScript Client Bundles.',
      highlights: [
        '100% custom PHP theme template engine free from heavy plugin dependencies',
        'SCSS design tokens providing precise responsive typography and layout grids',
        'Strict TypeScript modules handling asynchronous contact forms and lightbox galleries'
      ],
      codeSnippet: {
        filename: 'functions.php',
        language: 'php',
        code: `<?php
// Bespoke WordPress Theme Setup - Zero Page Builder Dependencies
function gosscoatings_enqueue_assets() {
    wp_enqueue_style('theme-styles', get_template_directory_uri() . '/dist/css/main.css', [], '1.0.0');
    wp_enqueue_script('theme-app', get_template_directory_uri() . '/dist/js/app.js', [], '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'gosscoatings_enqueue_assets');`
      }
    },
    interactiveDemoType: 'serverless'
  },
  {
    id: 'seven-projects-wordpress',
    title: 'Seven Projects Commercial Showcase',
    subtitle: 'Tailored WordPress Architecture (No Page Builder)',
    description: 'Bespoke WordPress solution for sevenprojects.com built without page builders. Utilized custom PHP template logic, SCSS modular styling, TypeScript interactivity, and WCAG accessibility standards.',
    category: 'Backend & WebApp',
    tags: ['PHP', 'SCSS', 'TypeScript', 'JavaScript', 'Bespoke WordPress', 'WCAG 2.1 AA'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
    featured: true,
    liveDemoUrl: 'https://sevenprojects.com',
    githubUrl: 'https://github.com/elnobun/sevenprojects-custom-theme',
    metrics: [
      { label: 'Custom PHP Theme', value: '100% Bespoke' },
      { label: 'Mobile Performance', value: '98 / 100' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' }
    ],
    caseStudy: {
      problem: 'High-end project showcase demanded bespoke visual layouts and smooth interactions that standard WordPress page builders could not achieve without severe bloat.',
      solution: 'Wrote structured PHP template modules, SCSS responsive styles, and TypeScript component controllers for custom portfolio filtering and lightbox views.',
      architecture: 'Bespoke PHP WordPress Architecture -> SCSS Design System -> TypeScript Client Controllers.',
      highlights: [
        'Handcrafted PHP layout templates with optimized database query loops',
        'BEM SCSS styling architecture supporting fluid responsive breakpoints',
        'Custom TypeScript filtering system for seamless project showcase navigation'
      ]
    },
    interactiveDemoType: 'analytics'
  },
  {
    id: 'andersons-waste-platform',
    title: 'Andersons Waste Digital Service',
    subtitle: 'Commercial Booking & Service Quote Engine',
    description: 'Full frontend development and responsive interactive quote interface for andersonswaste.co.uk. Translated design specs into high-converting, accessible web pages.',
    category: 'UI/UX',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'SASS', 'WCAG 2.1 AA', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80',
    featured: false,
    liveDemoUrl: 'https://www.andersonswaste.co.uk',
    githubUrl: 'https://github.com/elnobun/andersons-waste-frontend',
    metrics: [
      { label: 'Mobile Conversion', value: '+42%' },
      { label: 'Browser Parity', value: '100%' },
      { label: 'First Contentful Paint', value: '0.6s' }
    ],
    caseStudy: {
      problem: 'Original site presented layout glitches on mobile devices and lacked interactive quote calculations.',
      solution: 'Wrote structured JavaScript and SASS modules providing an instant cost estimation slider and smooth step-by-step service picker.',
      architecture: 'Vanilla JavaScript -> SASS BEM Architecture -> Responsive Reflow Engine.',
      highlights: [
        'Built interactive cost estimation slider with instant quote feedback.',
        'Refactored SASS stylesheet into modular BEM architecture for maintainability.',
        'Achieved 100% cross-browser testing parity across iOS, Android, and desktop.'
      ]
    },
    interactiveDemoType: 'e-commerce'
  },
  {
    id: 'okane-lavers-corporate',
    title: 'OKane Lavers Luxury Automotive Platform',
    subtitle: 'Global Car Dealership Portal (29 Countries & £20M+ Sales)',
    description: 'Designed and engineered the responsive web experience and interactive vehicle showcases for okanelavers.com — supporting high-quality car sales across 29 countries with over £20 million in total dealership sales.',
    category: 'UI/UX',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'SASS', 'WCAG 2.1 AA', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    featured: false,
    liveDemoUrl: 'https://okanelavers.com',
    githubUrl: 'https://github.com/elnobun/okane-lavers-frontend',
    metrics: [
      { label: 'Global Reach', value: '29 Countries' },
      { label: 'Dealership Sales', value: '£20M+' },
      { label: 'Load Time', value: '0.8s' }
    ],
    caseStudy: {
      problem: 'High-value luxury car buyers across international markets needed a fluid, fast, and prestigious digital vehicle showcase optimized for high-resolution media on mobile and desktop.',
      solution: 'Delivered an ultra-responsive frontend with optimized image delivery, cross-browser SASS layouts, and intuitive vehicle inventory filtering for international buyers.',
      architecture: 'Modular JavaScript Engine -> SASS Design Tokens -> High-Performance Asset Delivery.',
      highlights: [
        'Optimized vehicle catalog layout supporting international buyer inquiries across 29 countries',
        'Created high-performance mobile drawer menu and vehicle photo galleries with zero layout shifts',
        'Achieved sub-second page loads and seamless cross-browser reliability for high-converting sales funnel'
      ]
    },
    interactiveDemoType: 'analytics'
  },
  {
    id: 'express-public-gateway',
    title: 'Express REST API & Public Gateway',
    subtitle: 'Secure Server-Side API & Consent Validation Gateway',
    description: 'Built REST APIs with Express.js for web services, incorporating request validation, error handling, Cloudflare DNS/SSL caching configuration, and GDPR consent controls.',
    category: 'Backend',
    tags: ['Express.js', 'Node.js', 'TypeScript', 'REST API', 'Cloudflare', 'GDPR'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    featured: false,
    liveDemoUrl: 'https://api.devportfolio.com/health',
    githubUrl: 'https://github.com/elnobun/express-api-gateway',
    metrics: [
      { label: 'P99 Latency', value: '22ms' },
      { label: 'SSL Rating', value: 'A+ (Cloudflare)' },
      { label: 'Validation Coverage', value: '100%' }
    ],
    caseStudy: {
      problem: 'Form submissions required strict server-side validation and secure CORS headers to prevent cross-site request vulnerabilities and invalid payload submissions.',
      solution: 'Created Express middleware layers for payload sanitization, rate limiting, structured JSON error responses, and automated CORS headers.',
      architecture: 'Client App -> Cloudflare SSL Edge -> Express REST API -> Validation Middleware -> Storage Service.',
      highlights: [
        'Express middleware for data minimisation and consent logging compliant with GDPR',
        'Structured error handling returning WCAG-friendly JSON error arrays',
        'Cloudflare caching rules for static assets and API routes'
      ],
      codeSnippet: {
        filename: 'server.ts',
        language: 'typescript',
        code: `import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS || '*' }));

app.post('/api/enquiry', (req, res) => {
  const { name, email, message, consent } = req.body;
  if (!consent) {
    return res.status(400).json({ error: 'Consent is required under GDPR regulations.' });
  }
  // Process enquiry...
  res.status(200).json({ status: 'success', message: 'Enquiry received securely.' });
});

app.listen(3000, '0.0.0.0', () => console.log('Gateway active on port 3000'));`
      }
    },
    interactiveDemoType: 'serverless'
  }
];

export const TECH_STACK: TechItem[] = [
  {
    id: 'typescript-javascript',
    name: 'JavaScript & TypeScript',
    category: 'Frontend',
    proficiency: 98,
    experienceYears: 8,
    description: 'Modern ES6+ standards, strict TypeScript interfaces, DOM manipulation, asynchronous patterns, and clean modular code principles.',
    iconName: 'code_blocks',
    codeSnippet: {
      filename: 'types.ts',
      code: `export interface UserJourney {
  id: string;
  step: number;
  accessible: boolean;
  validateStep: () => boolean;
}`
    },
    features: ['Strict Type Checking & Generics', 'Async/Await & Fetch API', 'Clean Modular Architecture']
  },
  {
    id: 'php-wordpress',
    name: 'PHP & Bespoke WordPress',
    category: 'Backend',
    proficiency: 95,
    experienceYears: 8,
    description: 'Bespoke WordPress theme development engineered from scratch with PHP, custom templates, REST APIs, and zero page builder bloat.',
    iconName: 'terminal',
    codeSnippet: {
      filename: 'functions.php',
      code: `// Bespoke WordPress Theme Core Setup
add_action('after_setup_theme', function() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(['primary' => __('Primary Menu', 'bespoke')]);
});`
    },
    features: ['Custom PHP Theme Engine', 'No Page Builder Dependencies', 'Optimized WordPress REST API']
  },
  {
    id: 'accessibility-wcag',
    name: 'WCAG 2.1 AA Accessibility & UX',
    category: 'Frontend',
    proficiency: 98,
    experienceYears: 8,
    description: 'Semantic HTML5, ARIA roles, screen reader testing (NVDA/JAWS/VoiceOver), keyboard navigation, and contrast audits.',
    iconName: 'accessibility_new',
    codeSnippet: {
      filename: 'ariaLive.ts',
      code: `// Dynamic Accessible Live Region Announcer
export function announceToScreenReader(message: string) {
  const liveRegion = document.getElementById('aria-live-announcer');
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}`
    },
    features: ['Keyboard Navigation & Focus Control', 'Semantic HTML5 Structural Tags', 'ARIA Live Regions & High Contrast']
  },
  {
    id: 'css-sass-scss',
    name: 'CSS3, SASS & SCSS Styling',
    category: 'Frontend',
    proficiency: 96,
    experienceYears: 8,
    description: 'Responsive flexbox/grid layouts, BEM methodology, SASS/SCSS mixins, fluid typography, and custom design tokens.',
    iconName: 'palette',
    codeSnippet: {
      filename: 'styles.scss',
      code: `@mixin responsive-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}`
    },
    features: ['Responsive Mobile-First Fluidity', 'SASS/SCSS Mixins & Variables', 'BEM Naming Conventions']
  },
  {
    id: 'express-rest-apis',
    name: 'REST APIs & Express.js',
    category: 'Backend',
    proficiency: 90,
    experienceYears: 6,
    description: 'Express.js routing, middleware pipelines, CORS configuration, input validation, and GDPR consent logic.',
    iconName: 'dns',
    codeSnippet: {
      filename: 'apiRouter.ts',
      code: `import { Router } from 'express';
const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

export default router;`
    },
    features: ['Express Routing & Middleware', 'Payload Validation & Error Trapping', 'CORS & Security Headers']
  },
  {
    id: 'pagespeed-lighthouse',
    name: 'Performance & Web Auditing',
    category: 'Tooling & AI',
    proficiency: 92,
    experienceYears: 7,
    description: 'PageSpeed Insights, Core Web Vitals optimization, Lighthouse audits, asset compression, and Google Analytics tracking.',
    iconName: 'speed',
    codeSnippet: {
      filename: 'analytics.ts',
      code: `export function trackUserInteraction(eventName: string, details: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, details);
  }
}`
    },
    features: ['Core Web Vitals Optimization', 'Lighthouse Audit Remediation', 'Google Analytics Event Tracking']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Lead Frontend Web Developer',
    company: 'Tonic Fusion LLP',
    period: 'May 2021 – June 2026',
    location: 'United Kingdom',
    description: 'Led frontend delivery across more than 20 web projects, remaining hands-on with JavaScript, TypeScript, PHP, SCSS, and Bespoke WordPress while driving technical decisions, accessibility checks, and Agile sprints.',
    highlights: [
      'Led frontend delivery for 20+ web projects, maintaining high quality standards and code reviews',
      'Supported the Civil Service College website with complete WCAG 2.1 AA accessibility checks and form usability fixes',
      'Contributed to the University of Hertfordshire Sports platform serving 15,000+ students with responsive accessible UI',
      'Engineered bespoke WordPress platforms (Goss Coatings, Seven Projects) using custom PHP & SCSS without page builders',
      'Integrated frontend applications with Express REST APIs, applying GDPR principles and consent controls'
    ],
    tags: ['JavaScript', 'TypeScript', 'PHP', 'SCSS', 'Bespoke WordPress', 'WCAG 2.1 AA', 'Express.js', 'Agile'],
    current: true
  },
  {
    id: 'exp-2',
    title: 'Web Developer / Product Analyst',
    company: 'Digital Echos',
    period: 'Nov 2019 – May 2021',
    location: 'United Kingdom',
    description: 'Developed and maintained client websites, translating user and business requirements into responsive frontend solutions within agreed budgets and timelines.',
    highlights: [
      'Led a 5-person development team during a company website redesign, establishing coding standards and peer reviews',
      'Helped transition team to Agile delivery cycles through sprint planning, backlog reviews, and retrospectives',
      'Improved website speed, accessibility, and search visibility using PageSpeed data and technical audits'
    ],
    tags: ['JavaScript', 'Sass', 'HTML5', 'Agile Delivery', 'PageSpeed Insights', 'Google Analytics']
  },
  {
    id: 'exp-3',
    title: 'Code Mentor and Technical Reviewer',
    company: 'Udacity Inc.',
    period: 'June 2016 – Nov 2019',
    location: 'California, USA (Remote)',
    description: 'Reviewed code and provided technical support to more than 500 learners working across front-end web development technologies.',
    highlights: [
      'Reviewed code and provided structured technical feedback to over 500 developers',
      'Created troubleshooting guides and self-help resources for common web development barriers',
      'Consistently met response targets while maintaining high learner satisfaction ratings'
    ],
    tags: ['Code Review', 'Mentorship', 'JavaScript', 'HTML/CSS', 'Debugging']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Masters Degree',
    institution: 'University of Leicester, UK',
    period: '2011 – 2013',
    description: 'Advanced academic study focusing on software engineering principles, technical problem solving, and analytical research.',
    achievement: 'Masters Degree Graduate • University of Leicester'
  },
  {
    id: 'edu-2',
    degree: 'Full Stack Web Development Certification',
    institution: 'Udacity Inc.',
    period: '2015 – 2016',
    description: 'Comprehensive certification covering full-stack web architectures, frontend interactions, APIs, and modern JavaScript standards.',
    achievement: 'Full Stack Nanodegree Certification'
  }
];

export const HOBBIES: Hobby[] = [
  {
    title: 'Public Service UX',
    icon: 'volunteer_activism',
    description: 'Advocating for accessible public-facing web services and digital inclusion for all users.',
    tag: 'Accessibility'
  },
  {
    title: 'Code Mentorship',
    icon: 'school',
    description: 'Guiding aspiring frontend developers through code reviews and web standards best practices.',
    tag: 'Community'
  },
  {
    title: 'PageSpeed Tuning',
    icon: 'speed',
    description: 'Auditing web performance, Core Web Vitals, and asset compression to achieve 95+ scores.',
    tag: 'Performance'
  },
  {
    title: 'Agile & Continuous Learning',
    icon: 'psychology',
    description: 'Exploring new frontend tools, cloud platforms, and user-centred design guidelines.',
    tag: 'Growth'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Ellis led our frontend delivery with exceptional attention to accessibility, code quality, and responsive design. His work on the Civil Service College forms transformed user engagement.',
    author: 'Tonic Fusion Leadership',
    role: 'Managing Partner',
    company: 'Tonic Fusion LLP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't-2',
    quote: 'During our company website redesign, Ellis led the 5-person dev team brilliantly. He introduced peer code reviews and PageSpeed auditing that significantly boosted our performance metrics.',
    author: 'Digital Echos Team',
    role: 'Product Lead',
    company: 'Digital Echos',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  }
];
