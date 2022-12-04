let plugins = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-custom-media'),
  require("postcss-each"),
  require('postcss-extend'), // be careful, extend does not support nesting.
  require('postcss-preset-env')({ browsers: ['last 2 versions and not dead and > .5%'] }), // check at: https://browserslist.dev/
  require('postcss-focus'),
  require('postcss-mixins'),
  require('autoprefixer'),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'))
}

module.exports = {
  plugins: plugins
};

