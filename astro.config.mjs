import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hackclubaps.vercel.app",
  output: "static",
  integrations: [
    react(),
    sitemap(),
    tailwind(),
    vercel({
      webAnalytics: {
        enabled: true,
      },
    }),
  ],
});
