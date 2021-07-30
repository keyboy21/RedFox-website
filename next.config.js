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
