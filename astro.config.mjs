// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";

export default defineConfig({
  site: SITE_URL,
  // GitHub Pages project-page path. In dev, the site is served from this
  // same path (e.g. http://localhost:4321/aroma/), not from `/`. Update if
  // the repo is renamed, or remove this line entirely once a custom domain
  // is set up.
  base: "/aroma/",
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],
  fonts: [
    {
      name: "Cabinet Grotesk",
      cssVariable: "--font-cabinet-grotesk",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/cabinet-grotesk-regular.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/cabinet-grotesk-medium.woff2"],
          },
          {
            weight: 800,
            style: "normal",
            src: ["./src/assets/fonts/cabinet-grotesk-extrabold.woff2"],
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/cabinet-grotesk-black.woff2"],
          },
        ],
      },
    },
    {
      name: "Tenor Sans",
      cssVariable: "--font-tenor-sans",
      provider: fontProviders.local(),
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/tenor-sans-regular.ttf"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
