# cbst (Chris Brown's starter theme)
starter theme for drupal, very basic, subthemes the stable9 theme.
  
includes an .nvmrc file to set the appropriate nodejs version with the command `nvm use` when [nvm](https://github.com/nvm-sh/nvm) is installed.  
  
- uses postcss to compile css via the npm scripts `css:watch` and `css:build`.  
- uses rollup to compile js via the npm scrips `js:watch` and `js:build`.  
- `watch` scripts compile to the assets/dev folder, `build` scripts compile to the assets/dist folder.  

set environment variable `DEV_MODE` to true to use css/js from the dev folder, otherwise css/js from the dist folder is used.  
