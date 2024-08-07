# cbst (Chris Brown's starter theme)
starter theme for drupal, very basic, subthemes the stable9 theme.
  
includes an .nvmrc file to set the appropriate nodejs version with the command `nvm use` when [nvm](https://github.com/nvm-sh/nvm) is installed.  

- uses [rollup](https://www.npmjs.com/package/rollup) to compile js via the npm scrips `js:watch` and `js:build`.
- The source JS file is in the src/js folder. (this is the one you should edit)
- `watch` scripts compile to script.dev.js and is not minfied, `build` scripts compile to the script.js and if minified (If you have been developing with "watch", remember to "build" before deployment).
- set environment variable `DEV_MODE` to true to load the script.dev.js, otherwise script.js is loaded.
- minification is done via [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser), see the rollup.config.js file.

  
