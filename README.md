# nodecg-react-template
Template for NodeCG bundles that use React and TypeScript. Heavily inspired by zoton2's [nodecg-vue-ts-template](https://github.com/zoton2/nodecg-vue-ts-template) template.

This template uses the [new install method](https://www.nodecg.dev/docs/installing-new) for NodeCG.

## Some technical details
- Extension uses TypeScript.
- Browser code is built using [Rsbuild](https://rsbuild.rs/), and extension code is built and bundled using [Rspack](https://rspack.rs/)
- Browser uses React v18, with TSX support by default.
    - Includes [@nodecg/react-hooks](https://www.npmjs.com/package/@nodecg/react-hooks) for easy use of replicants compatible with React Hooks.
    - Dashboard includes [Material UI](https://mui.com/) configured for dark mode by default for easy styling.
- ESLint is included for help with writing proper code.
    - Includes [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) and [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) to help with writing React Hooks.
- The extension/browser files have some example code scattered about that should help in how to use things.
- Prettier is included with a bit of an opinionated config. Feel free to change it to your own likings.

## Package commands
- `autofix`: Automatically fix any possible linting errors using ESLint.
- `autofix:browser`: See above, but only for browser based code.
- `autofix:extension`: See above, but only for extension based code/typings.
- `build`: Build written code for use in production.
- `build:browser`: See above, but only for browser based code.
- `build:extension`: See above, but only for extension based code.
- `clean`: Clean up all built/watched files.
- `lint`: Finds any possible linting errors using ESLint, but does not fix them.
- `prebuild`: Alias for `clean`, will automatically run before `build` if called.
- `prettify`: Runs Prettify on the browser and extension source code.
- `schema-types`: Create TypeScript typings for schemas/`Configschema.json` using `nodecg-cli`.
- `start`: Start NodeCG.
- `watch`: Build code and watch for changes, for use in development.
- `watch:browser`: See above, but only for browser based code.
- `watch:extension`: See above, but only for extension based code.