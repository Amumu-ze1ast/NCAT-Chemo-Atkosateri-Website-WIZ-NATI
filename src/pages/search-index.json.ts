import type { APIRoute } from 'astro';
import { faculty } from '../data/faculty';
import { researchAreas, undergradPrograms, gradPrograms } from '../data/department';
import { news } from '../data/news';

const areaId = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

interface Rec { title: string; sub: string; url: string; type: string; kw: string; }
const recs: Rec[] = [];

const pages = [
  { title: 'Home', url: '/', kw: 'chemistry department home hbcu aggie' },
  { title: 'About', url: '/about', kw: 'mission vision chair accreditation acs contact areas of impact' },
  { title: 'Academics', url: '/academics', kw: 'programs bs chemistry biomedical biochemistry minor ms mat graduate undergraduate apply advising override scholarships' },
  { title: 'Research', url: '/research', kw: 'research areas funding nsf nih dod doe labs facilities publications instrumentation' },
  { title: 'People', url: '/people', kw: 'faculty staff directory postdocs teaching' },
  { title: 'News & Events', url: '/news', kw: 'news events seminars calendar achievements openings' },
  { title: 'Apply', url: '/apply', kw: 'apply admission undergraduate graduate international visa i-20 deadlines' },
  { title: 'Give', url: '/give', kw: 'give giving donate support scholarship gift' },
  { title: 'Contact', url: '/contact', kw: 'contact email phone office override form map directions visit' },
  { title: 'Accessibility', url: '/accessibility', kw: 'accessibility wcag ada title ii' },
];
pages.forEach((p) => recs.push({ title: p.title, sub: 'Page', url: p.url, type: 'Page', kw: p.kw }));

faculty.forEach((f) => recs.push({
  title: f.name, sub: f.title, url: '/people/' + f.slug, type: 'Person',
  kw: (f.areas.join(' ') + ' ' + f.title + ' ' + f.category + ' ' + f.name).toLowerCase(),
}));

researchAreas.forEach((a) => recs.push({
  title: a.title, sub: 'Research area', url: '/research#' + areaId(a.title), type: 'Research',
  kw: a.topics.join(' ').toLowerCase(),
}));

undergradPrograms.forEach((p) => recs.push({ title: p.title, sub: 'Program', url: '/academics#undergraduate', type: 'Program', kw: p.body.toLowerCase() }));
gradPrograms.forEach((p) => recs.push({ title: p.title, sub: 'Program', url: '/academics#graduate', type: 'Program', kw: p.body.toLowerCase() }));

news.forEach((n) => recs.push({ title: n.title, sub: n.date + ' · ' + n.category, url: '/news/' + n.slug, type: 'News', kw: (n.title + ' ' + n.excerpt + ' ' + n.category).toLowerCase() }));

export const GET: APIRoute = () =>
  new Response(JSON.stringify(recs), { headers: { 'content-type': 'application/json' } });
