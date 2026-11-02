// Content model for the Concept G homepage. Editing copy/cards here keeps the
// components purely presentational.

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Research', href: '/research' },
  { label: 'People', href: '/people' },
  { label: 'News & Events', href: '/news' },
];

export const stats = [
  { n: '98', u: '+', l: 'Undergraduate majors' },
  { n: '$3', u: 'M', l: 'Annual research funding' },
  { n: '20', u: '+', l: 'Faculty & research staff' },
  { n: 'ACS', u: '', l: 'Certified curriculum' },
];

export const paths = [
  { tag: 'Intl. welcome', num: '01', title: 'Future Undergraduate', body: 'BS tracks, ACS certification, scholarships, and how to apply.', cta: 'Start here', href: '/academics' },
  { tag: 'Intl. welcome', num: '02', title: 'Future Graduate', body: 'MS & MAT programs, assistantships, advisors. Visa & I-20 guidance.', cta: 'Explore programs', href: '/academics' },
  { tag: '', num: '03', title: 'Current Student', body: 'Courses, advising, the override form, deadlines, and the seminar calendar.', cta: 'Student hub', href: '/academics' },
  { tag: '', num: '04', title: 'Research & Partners', body: 'Research areas, labs & instrumentation, publications, and ways to give.', cta: 'See the science', href: '/research' },
];

export const researchAreas = [
  { n: '01', title: 'Materials & Inorganic', desc: 'Porous materials, additive manufacturing, lanthanide luminescence, microreactor catalysis.' },
  { n: '02', title: 'Analytical', desc: 'Polymer biosensing & bioimaging for early disease screening.' },
  { n: '03', title: 'Biochemistry', desc: 'Protein structure & function; metabolomics.' },
  { n: '04', title: 'Physical Chemistry', desc: 'Spectroscopy, energy, and the principles behind materials and reactions.' },
  { n: '05', title: 'Chemical Education', desc: 'How students learn chemistry — and how we teach it better.' },
];

export const marqueeItems = ['Analytical', 'Biochemistry', 'Materials & Inorganic', 'Physical', 'Chemical Education'];

export const trust = [
  { b: 'ACS-certified', span: 'Undergraduate curriculum' },
  { b: '<i>Astronaut</i> & Goldwater', span: 'Scholar alumni' },
  { b: 'NSF · NIH · DoD · DOE', span: 'Funded research' },
  { b: '#1 HBCU', span: 'by enrollment' },
];

export const gallery = [
  { src: '/Photos/Chemisrty.webp', alt: 'NC A&T chemistry student operating an automated instrument in the lab', cap: 'Instrumentation & automated lab work' },
  { src: '/Photos/nc-at-10265-new-gigapixel-low resolution v2-2x-faceai v2.jpeg', alt: 'NC A&T chemistry student examining a reagent bottle at the lab bench', cap: 'At the bench — reagent prep' },
  { src: '/Photos/site/symposium-talk.jpg', alt: 'An NC A&T chemistry student presenting research at the Undergraduate Research Symposium', cap: 'Undergraduate Research Symposium' },
  { src: '/Photos/site/students-celebrate.jpg', alt: 'NC A&T chemistry students celebrating together at the research symposium', cap: 'Celebrating our student researchers' },
  { src: '/Photos/site/induction-group.jpg', alt: 'Chemistry students holding certificates at the 2026 Gamma Sigma Epsilon honor society induction', cap: '2026 Honors Society Induction' },
  { src: '/Photos/site/banquet-group.jpg', alt: 'NC A&T Department of Chemistry community gathered at the 2026 department banquet', cap: 'Department Banquet 2026' },
];

export const people = [
  { name: 'Dr. Peng He', role: 'Assistant Professor', area: 'Analytical · Biosensing' },
  { name: 'Dr. Bishnu Bastakoti', role: 'Associate Professor', area: 'Porous materials' },
  { name: 'Dr. Rachel Bangle', role: 'Assistant Professor', area: 'Analytical chemistry' },
  { name: 'Dr. Debasish Kuila', role: 'Professor', area: 'Catalysis · Environment' },
];

// news: img === null renders a PHOTO placeholder (kept for the Tanae Lewis story).
export const news = [
  { date: 'May 2026 · Student', title: 'Tanae Lewis named Astronaut & Goldwater Scholar', img: '/Photos/tanae-lewis.webp', alt: 'Tanae Lewis, NC A&T chemistry student named Astronaut & Goldwater Scholar' },
  { date: 'Apr 2026 · Grant', title: 'New NSF award expands materials research', img: '/Photos/site/research-structures.jpg', alt: 'Slide detailing a synthetic chemistry process from NC A&T materials research' },
  { date: 'Mar 2026 · Department', title: '2026 Honors Society Induction welcomes new members', img: '/Photos/site/induction-news.jpg', alt: 'New inductees holding certificates at the 2026 Chemistry Honors Society induction' },
];

export const events = [
  { d: '12', m: 'Sep', title: 'Departmental Seminar: Frontiers in Biosensing', meta: 'New Science Building · 3:30 PM', tag: 'Seminar' },
  { d: '24', m: 'Sep', title: 'Graduate Application Deadline (Priority)', meta: 'Online · 11:59 PM', tag: 'Deadline' },
  { d: '08', m: 'Oct', title: 'Undergraduate Research Symposium', meta: 'Student Center · All day', tag: 'Symposium' },
];

export const footerLinks = {
  explore: nav,
  quick: [
    { label: 'Apply', href: '#' }, { label: 'Give', href: '#' },
    { label: 'Directory', href: '#' }, { label: 'Chemistry Override Form', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  connect: [
    { label: 'X · @NCATChemDept', href: '#' }, { label: 'LinkedIn', href: '#' },
    { label: 'Accessibility statement', href: '#' },
    { label: 'Non-discrimination / Title IX', href: '#' }, { label: 'Privacy', href: '#' },
  ],
};
