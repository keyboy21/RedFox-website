const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

module.exports = {
  webpack5: false,
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