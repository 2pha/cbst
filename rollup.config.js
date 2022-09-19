
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'assets/src/js/script.js',
  output: {
    file: (production) ? 'assets/dist/js/script.js' : 'assets/dev/js/script.js',
    format: 'iife',
    interop: false,
    globals: {
      Drupal: 'Drupal',
      drupalSettings: 'drupalSettings',
      jQuery: 'jQuery',
    },
  },
  external : ['Drupal', 'drupalSettings', 'jQuery'],
  plugins: [
    nodeResolve(),
    production && terser()
  ],
};
