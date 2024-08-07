
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/js/script.js',
  output: {
    file: (production) ? 'js/script.js' : 'js/script.dev.js',
    format: 'iife',
    interop: false,
    globals: {
      Drupal: 'Drupal',
      drupalSettings: 'drupalSettings',
      $: 'jQuery',
    },
  },
  external : ['Drupal', 'drupalSettings', 'jQuery'],
  plugins: [
    nodeResolve(),
    production && terser()
  ],
};
