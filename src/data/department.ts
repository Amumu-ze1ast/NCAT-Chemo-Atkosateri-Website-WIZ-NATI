// Department facts, programs, research areas, contacts (roadmap §1 & §3).

export const stats = [
  { n: '98', u: '+', l: 'Undergraduate majors' },
  { n: '30', u: '+', l: 'Graduate students' },
  { n: '$3', u: 'M', l: 'Annual research funding' },
  { n: 'ACS', u: '', l: 'Certified curriculum' },
];

export const areasOfImpact = ['Energy', 'Environment', 'Materials', 'Health', 'Medicine'];

export const undergradPrograms = [
  { title: 'BS Chemistry — ACS-certified track', body: 'The rigorous, research-ready path, taught to the ACS Curriculum Guide.' },
  { title: 'BS Chemistry — Biomedical / Biochemistry (BB) track', body: 'For students headed toward medicine, pharmacy, and the health professions.' },
  { title: 'Minor in Chemistry', body: 'A minimum of 18 credit hours, each completed with a grade of C or better.' },
];

export const gradPrograms = [
  { title: 'MS Chemistry', body: 'A thesis-based research master degree with an advisor and assistantships.' },
  { title: 'MAT Chemistry', body: 'Master of Arts in Teaching for current and future chemistry educators.' },
];

export const gradRequirements = [
  'Select a research advisor',
  'Meet with at least three professors',
  'Form an advisory committee',
  'Sign a Plan of Work',
  'Complete 17 credit hours of 700-level coursework',
];

export const researchAreas = [
  { slug: 'materials-inorganic', title: 'Materials & Inorganic', intro: 'Designing and building functional materials — from porous frameworks to 3D-printed parts and luminescent complexes — that store energy, sense their surroundings, and clean the environment.', topics: ['Programmable design of porous materials', 'Additive manufacturing & 3D printing (binder jetting, SLM)', 'Tunable lanthanide luminescence (CaWO4, CaSiO3)', 'Microreactor catalysis & environmental materials'], faculty: ['zerihun-assefa', 'bishnu-bastakoti', 'mufeed-basti', 'debasish-kuila'] },
  { slug: 'analytical', title: 'Analytical', intro: 'Measuring the molecular world — building sensors and methods that detect disease and reveal how molecules behave.', topics: ['Polymer-based biosensing & bioimaging for early disease screening', 'Electroanalytical & spectroscopic methods'], faculty: ['peng-he', 'rachel-bangle', 'debasish-kuila'] },
  { slug: 'biochemistry', title: 'Biochemistry', intro: 'The chemistry of life — protein structure and function, redox biology, and metabolomics.', topics: ['Protein structure & function', 'Redox biology & reactive species', 'Metabolomics'], faculty: ['thomas-forshaw'] },
  { slug: 'physical', title: 'Physical Chemistry', intro: 'The principles behind materials and reactions — spectroscopy, energy, and reaction dynamics.', topics: ['Spectroscopy & energy transfer', 'Reaction dynamics & thermodynamics'], faculty: [] },
  { slug: 'chemical-education', title: 'Chemical Education', intro: 'How students learn chemistry — and how we teach it more effectively.', topics: ['Evidence-based teaching practices', 'Student learning & success in chemistry'], faculty: ['robert-ferguson', 'etta-gravely'] },
];

export const contacts = [
  { role: 'Undergraduate Studies', name: 'Dr. Marion Franks', email: 'mafranks@ncat.edu', phone: '336-285-2230', office: 'New Science Building, Rm 345' },
  { role: 'Graduate Studies', name: 'Dr. Bishnu Bastakoti', email: '', phone: '336-285-2233', office: 'New Science Building, Rm 341' },
  { role: 'Department Chair', name: 'Dr. Zerihun Assefa', email: '', phone: '336-285-2255', office: 'New Science Building, Rm 348' },
  { role: 'General inquiries', name: 'Department of Chemistry', email: 'chemdept@ncat.edu', phone: '', office: 'New Science Building, 1601 East Market Street, Greensboro, NC 27411' },
];

export const social = {
  x: 'https://twitter.com/NCATChemDept',
  linkedin: 'https://www.linkedin.com/',
  university: 'https://www.ncat.edu/',
  apply: 'https://www.ncat.edu/apply/',
  give: 'https://www.ncat.edu/giving/',
  facebook: 'https://web.facebook.com/NCATCHEM/',
};
