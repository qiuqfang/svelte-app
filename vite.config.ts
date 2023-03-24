import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
    AutoImport({
      imports: ["svelte", { "$app/stores": ["getStores", "navigating", "page", "updated"] }],
      dts: true,
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
