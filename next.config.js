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
  async headers() {
    return [
      {
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Instead of this value:
            value: 'public, no-cache, no-store',
            // Cache-Control response header is `public, max-age=60` in production
            // and `public, max-age=0, must-revalidate` in development
          },
        ],
      },
    ]
  },

}