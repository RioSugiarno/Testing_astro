import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://your-netflify-url.netlify.app",
  integrations: [preact()]
});