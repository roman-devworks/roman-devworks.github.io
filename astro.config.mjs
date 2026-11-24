import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.roman-devworks.com',
  base: '/',
  integrations: [
    starlight({
      title: 'Roman Devworks',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      components: { Footer: './src/components/Footer.astro' },
      sidebar: [
        { label: 'Products', items: [{ autogenerate: { directory: 'products' } }] },
        { label: 'Support', items: [{ autogenerate: { directory: 'support' } }] },
        { label: 'Security', items: [{ autogenerate: { directory: 'security' } }] },
      ],
    }),
  ],
});
