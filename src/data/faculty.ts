// Faculty + staff roster (roadmap §3). Real names/titles/roles; the three
// directors carry real published contact info. Other contact/scholar/pub fields
// are intentionally blank ("to be confirmed") — do not fabricate.

export interface Publication { title: string; authors: string; venue: string; year: string; doi?: string; }
export type Category = 'faculty' | 'teaching' | 'research-staff' | 'staff';

export interface Person {
  slug: string; name: string; title: string; category: Category;
  areas: string[]; draftQuestion: string;
  email: string; phone: string; office: string;
  lab: string; scholar: string; orcid: string;
  pubs: Publication[]; courses: string[]; photo: string;
}

export const categoryLabels: Record<Category, string> = {
  'faculty': 'Faculty',
  'teaching': 'Teaching Faculty',
  'research-staff': 'Postdocs & Research Staff',
  'staff': 'Staff',
};

const blank = { email: '', phone: '', office: '', lab: '', scholar: '', orcid: '', pubs: [], courses: [], photo: '' };

export const faculty: Person[] = [
  { slug: 'zerihun-assefa', name: 'Dr. Zerihun Assefa', title: 'Professor & Department Chair', category: 'faculty', areas: ['Materials & Inorganic'], draftQuestion: 'How do lanthanide and gold complexes produce the tunable luminescence we can engineer for sensing and lighting? (DRAFT — confirm with faculty.)', ...blank, phone: '336-285-2255', office: 'New Science Building, Rm 348', photo: '/Photos/people/zerihun-assefa.webp' },
  { slug: 'rachel-bangle', name: 'Dr. Rachel Bangle', title: 'Assistant Professor', category: 'faculty', areas: ['Analytical'], draftQuestion: 'What can electroanalytical and spectroscopic methods reveal about how molecules move, react, and transfer energy? (DRAFT.)', ...blank, photo: '/Photos/people/rachel-bangle.webp' },
  { slug: 'bishnu-bastakoti', name: 'Dr. Bishnu Bastakoti', title: 'Associate Professor · Graduate Program Director', category: 'faculty', areas: ['Materials & Inorganic'], draftQuestion: 'How can we program the structure of porous nanomaterials to store energy and capture pollutants? (DRAFT.)', ...blank, phone: '336-285-2233', office: 'New Science Building, Rm 341', photo: '/Photos/people/bishnu-bastakoti.webp' },
  { slug: 'mufeed-basti', name: 'Dr. Mufeed Basti', title: 'Professor', category: 'faculty', areas: ['Materials & Inorganic'], draftQuestion: 'How can additive manufacturing — binder jetting and selective laser melting — build new functional materials? (DRAFT.)', ...blank },
  { slug: 'stefan-cooper', name: 'Dr. Stefan Cooper', title: 'Assistant Professor', category: 'faculty', areas: [], draftQuestion: '', ...blank },
  { slug: 'robert-ferguson', name: 'Dr. Robert Ferguson', title: 'Assistant Professor', category: 'faculty', areas: ['Chemical Education'], draftQuestion: 'How do students best learn chemistry — and how do we teach it more effectively? (DRAFT.)', ...blank },
  { slug: 'thomas-forshaw', name: 'Dr. Thomas Forshaw', title: 'Assistant Professor', category: 'faculty', areas: ['Biochemistry'], draftQuestion: 'How do redox reactions and reactive molecules drive — and disrupt — biological systems? (DRAFT.)', ...blank },
  { slug: 'marion-franks', name: 'Dr. Marion Franks', title: 'Associate Professor · Undergraduate Program Director', category: 'faculty', areas: [], draftQuestion: '', ...blank, email: 'mafranks@ncat.edu', phone: '336-285-2230', office: 'New Science Building, Rm 345' },
  { slug: 'etta-gravely', name: 'Dr. Etta Gravely', title: 'Associate Professor', category: 'faculty', areas: ['Chemical Education'], draftQuestion: '', ...blank },
  { slug: 'peng-he', name: 'Dr. Peng He', title: 'Assistant Professor', category: 'faculty', areas: ['Analytical'], draftQuestion: 'Can polymer-based biosensors and bioimaging tools detect disease earlier, faster, and at lower cost? (DRAFT.)', ...blank, photo: '/Photos/people/peng-he.webp' },
  { slug: 'debasish-kuila', name: 'Dr. Debasish Kuila', title: 'Professor', category: 'faculty', areas: ['Materials & Inorganic', 'Analytical'], draftQuestion: 'Can microreactor catalysts and nanomaterials convert feedstocks into fuels and help clean our environment? (DRAFT.)', ...blank, photo: '/Photos/people/debasish-kuila.webp' },

  { slug: 'angela-broadnax', name: 'Dr. Angela Broadnax', title: 'Teaching Assistant Professor', category: 'teaching', areas: [], draftQuestion: '', ...blank },
  { slug: 'jahangir-emrani', name: 'Dr. Jahangir Emrani', title: 'Teaching Associate Professor', category: 'teaching', areas: [], draftQuestion: '', ...blank },
  { slug: 'tanya-malloy', name: 'Dr. Tanya Malloy', title: 'Teaching Associate Professor', category: 'teaching', areas: [], draftQuestion: '', ...blank },

  { slug: 'sujoy-bepari', name: 'Dr. Sujoy Bepari', title: 'Postdoctoral Researcher', category: 'research-staff', areas: [], draftQuestion: '', ...blank },
  { slug: 'shrabani-de', name: 'Dr. Shrabani De', title: 'Postdoctoral Researcher', category: 'research-staff', areas: [], draftQuestion: '', ...blank },
  { slug: 'valeriia-karpovych', name: 'Dr. Valeriia Karpovych', title: 'Postdoctoral Scholar', category: 'research-staff', areas: [], draftQuestion: '', ...blank },
  { slug: 'debarati-mukherjee', name: 'Dr. Debarati Mukherjee', title: 'Postdoctoral Researcher', category: 'research-staff', areas: [], draftQuestion: '', ...blank },

  { slug: 'mark-holtan', name: 'Mark Holtan', title: 'Research Instrumentation Coordinator', category: 'staff', areas: [], draftQuestion: '', ...blank },
  { slug: 'joyce-njoroge', name: 'Joyce Njoroge', title: 'Research Operations Manager', category: 'staff', areas: [], draftQuestion: '', ...blank },
];

export const facultyAreas = ['Materials & Inorganic', 'Analytical', 'Biochemistry', 'Physical Chemistry', 'Chemical Education'];

// Featured on the homepage (research faculty with a public-facing question).
export const featuredFaculty = ['zerihun-assefa', 'peng-he', 'bishnu-bastakoti', 'debasish-kuila']
  .map((s) => faculty.find((f) => f.slug === s)!);
