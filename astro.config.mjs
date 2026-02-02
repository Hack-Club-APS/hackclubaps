import vue from "@astrojs/vue";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";


export default defineConfig({
  site: "https://hackclubaps.vercel.app",
  output: "static",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [react(), sitemap(), vue()],

  vite: {
    plugins: [tailwindcss()],
  },
});