// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kevin2606.github.io',
  base: 'URLShort',
  vite: {
    plugins: [tailwindcss()]
  }
});