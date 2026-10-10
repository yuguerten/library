import { defineConfig } from 'astro/config';

// Deployed to https://yuguerten.github.io/library/
// Change base to '/' if you deploy to https://yuguerten.github.io/ directly.
export default defineConfig({
  site: 'https://yuguerten.github.io',
  base: '/library',
  output: 'static',
  trailingSlash: 'always',
});
