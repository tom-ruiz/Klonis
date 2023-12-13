// next.config.js

module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-tom-ruiz' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-tom-ruiz/' : '',
};