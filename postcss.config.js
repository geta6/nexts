module.exports = {
  plugins: {
    'postcss-import': { root: './node_modules/' },
    'postcss-nesting': {},
    'postcss-nested': {},
    'postcss-media-variables': {},
    'postcss-custom-media': {},
    'postcss-css-variables': {},
    'postcss-custom-properties': { preserve: false },
    'postcss-calc': {},
    'postcss-media-variables': {},
    'postcss-media-minmax': {},
    'postcss-custom-selectors': {},
    'postcss-color-function': {},
    'postcss-flexbugs-fixes': {},
    autoprefixer: { browsers: ['last 2 versions'], flexbox: 'no-2009' },
  },
};
