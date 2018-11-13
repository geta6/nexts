const plugins = [require('@zeit/next-css'), require('@zeit/next-typescript')];

const config = {};

module.exports = plugins.reduce((prev, current) => current(prev), config);
