import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { globbySync } from 'globby';
import path from 'path';
import packageJson from './package.json';

const graphicsInputs = globbySync('./src/browser/graphics/*.tsx');
const dashboardInputs = globbySync('./src/browser/dashboard/*.tsx');

const bundleName = packageJson.name;

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypeCheck({
      tsCheckerOptions: {
        typescript: {
          configFile: './tsconfig.browser.json',
        },
      },
    }),
  ],
  environments: {
    graphics: {
      source: {
        entry: graphicsInputs.reduce((acc, file) => {
          const name = path.basename(file, path.extname(file));
          acc[name] = file;
          return acc;
        }, {}),
      },
      output: {
        distPath: {
          root: './graphics',
          js: 'static/js',
          css: 'static/css',
          image: 'static/images',
          html: '.',
        },
        filename: {
          js: '[name].js',
          css: '[name].css',
          image: '[name].[contenthash:8][ext]',
        },
        assetPrefix: `/bundles/${bundleName}/graphics/`,
        dataUriLimit: 0,
      },
      html: {
        template: './src/browser/template.html',
      },
      dev: {
        assetPrefix: `/bundles/${bundleName}/graphics/`,
      },
    },
    dashboard: {
      source: {
        entry: dashboardInputs.reduce((acc, file) => {
          const name = path.basename(file, path.extname(file));
          acc[name] = file;
          return acc;
        }, {}),
      },
      output: {
        distPath: {
          root: './dashboard',
          js: 'static/js',
          css: 'static/css',
          image: 'static/images',
          html: '.',
        },
        filename: {
          js: '[name].js',
          css: '[name].css',
          image: '[name].[contenthash:8][ext]',
        },
        assetPrefix: `/bundles/${bundleName}/dashboard/`,
        dataUriLimit: 0,
      },
      html: {
        template: './src/browser/template.html',
      },
      dev: {
        assetPrefix: `/bundles/${bundleName}/dashboard/`,
      },
    },
  },
  dev: {
    writeToDisk: true,
    client: {
      overlay: true,
      host: 'localhost',
      port: 3000,
    },
  },
});
