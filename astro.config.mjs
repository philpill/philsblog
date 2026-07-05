import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enables the proxy to run on the fly

  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs()]
});
