let plugins = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-preset-env')({ browsers: ['last 2 versions and not dead and > .5%'] }), // check at: https://browserslist.dev/
  require('autoprefixer'),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'))
}

module.exports = {
  plugins: plugins
};

