const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

module.exports = {
  generateEtags: false,
  images: {
    minimumCacheTTL: 5,
  },
  images: {
    domains: ['redfox.frilansus.com'],
  },
  i18n: {
    locales: ['uz', "ru"],
    defaultLocale: 'uz',

    domains: [
      {
        domain: 'redfox.uz',
        defaultLocale: 'uz',
      },
      {
        domain: 'redfox.uz/ru',
        defaultLocale: 'ru',
      },

    ],
  },

}