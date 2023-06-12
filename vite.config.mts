import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import NodeCGPlugin from 'vite-plugin-nodecg';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: { tsconfigPath: './tsconfig.browser.json' } }),
    NodeCGPlugin({
      inputs: {
        './src/browser/dashboard/*.tsx': './src/template.html',
        './src/browser/graphics/*.tsx': './src/template.html',
      },
    }),
  ],
});
