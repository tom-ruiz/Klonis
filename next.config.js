// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/piklaklonis/' : '',
  images: {
    unoptimized: true,
  },
}