const withCss = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withCss({ cssModules: true }));
