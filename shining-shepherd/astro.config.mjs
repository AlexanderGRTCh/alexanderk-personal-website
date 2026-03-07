import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  vite: {
    plugins: [
      {
        name: 'remove-generator-meta',
        transformIndexHtml(html) {
          return html.replace(/<meta name="generator"[^>]*>/i, '');
        },
      },
    ],
  },
});
