import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// NC A&T Department of Chemistry — homepage (Concept G "Vision").
export default defineConfig({
  site: 'https://www.ncat.edu',
  vite: { plugins: [tailwindcss()] },
});
