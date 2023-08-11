import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import netlify from '@astrojs/netlify/edge-functions'

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
  ],
})
