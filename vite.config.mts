import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodecg from "./vite-nodecg.mjs";
import rollupEsbuild from "rollup-plugin-esbuild";
import rollupExternals from "rollup-plugin-node-externals";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Getting __dirname with ES Modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodecg({
      bundleName: "nodecg-react-vite-template",
      graphics: "./src/browser/graphics/*.tsx",
      dashboard: "./src/browser/dashboard/*.tsx",
      extension: {
        input: "./src/extension/index.ts",
        plugins: [rollupEsbuild(), rollupExternals()],
      },
    }),
  ],
});
