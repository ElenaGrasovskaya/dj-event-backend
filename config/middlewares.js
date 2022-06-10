module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    settings: {
      cors: {
        origin: ['*'],
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
