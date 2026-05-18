import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://aleezamemon.github.io',
  base: '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});