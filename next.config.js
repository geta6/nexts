const path = require('path');
const plugins = [require('@zeit/next-css'), require('@zeit/next-typescript')];

const config = {
  cssModules: true,
  pageExtensions: ['ts', 'tsx'],
  postcssLoaderOptions: {
    ident: 'postcss',
    plugins: (loader) => [
      require('postcss-import')({ root: loader.resourcePath }),
      require('postcss-custom-properties')(),
      require('postcss-custom-media')(),
      require('postcss-media-minmax')(),
      require('postcss-custom-selectors')(),
      require('postcss-css-variables')(),
      require('postcss-calc')(),
      require('postcss-nesting')(),
      require('postcss-nested')(),
      require('postcss-color-function')(),
      require('postcss-flexbugs-fixes')(),
      require('autoprefixer')({ browsers: ['last 2 versions'], flexbox: 'no-2009' }),
    ],
  },
};

module.exports = plugins.reduce((prev, current) => current(prev), config);
