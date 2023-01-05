import astroI18next from "astro-i18next";
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), mdx(), partytown(), prefetch(), sitemap(), astroI18next()],
  defaultLocale: "sk",
  locales: ["sk", "cz", "hu"],
});