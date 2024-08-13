# cbst (Chris Brown's starter theme)
Starter theme for drupal, very basic, built from the [starterkiet_theme](https://git.drupalcode.org/project/drupal/-/tree/10.3.2/core/themes/starterkit_theme?ref_type=tags) (php core/scripts/drupal generate-theme cbst).
Alterations to the starterkit theme:
- Build CSS with SCSS.
- Build JS with Rollup.
- 
  
includes an .nvmrc file to set the appropriate nodejs version with the command `nvm use` when [nvm](https://github.com/nvm-sh/nvm) is installed.  

- uses [rollup](https://www.npmjs.com/package/rollup) to compile js via the npm scrips `js:watch` and `js:build`.
- The source JS file is in the src/js folder. (this is the one you should edit)
- `watch` scripts compile to script.dev.js and is not minfied, `build` scripts compile to the script.js and if minified (If you have been developing with "watch", remember to "build" before deployment).
- Set "Twig development mode" on on the "development settings" admin page at "/admin/config/development/settings" to true to load the script.dev.js, otherwise script.js (meant for production) is loaded.
- minification of the production js is done via [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser) when the prod js is built with node script "js:build", see the rollup.config.js file.

# Remember....  

As outlined above, there can be 2 versions of both the CSS and JS, a dev version and a prod version..  
Dev versions are built with the node scripts "css:watch" and "js"watch" and these are loaded when "Twig development mode" is on.  
The dev versions are not minified and easier to debug...  
Do not forget to build the prod versions with the node script "build" before pushing, ie "npm run build".  

  
