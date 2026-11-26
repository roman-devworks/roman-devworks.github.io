import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.roman-devworks.com',
  base: '/',
  integrations: [
    starlight({
      title: 'Roman Devworks',
      favicon: '/favicon.svg',
      head: [
        {
          // Starlight has no default-theme option: seed dark once, before its theme script reads the stored value.
          // Only runs when nothing is stored, so a later Light or Auto choice is never overwritten.
          tag: 'script',
          content:
            "try{localStorage.getItem('starlight-theme')===null&&localStorage.setItem('starlight-theme','dark')}catch{}",
        },
      ],
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
