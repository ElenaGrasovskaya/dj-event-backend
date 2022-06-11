module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['https://libraportal-backend.herokuapp.com', 'http://localhost:1337','http://localhost:3000', 'https://portal.libramebel.od.ua/account/login', 'https://portal.libramebel.od.ua','https://libraportal.vercel.app'],
      credentials: true,
    }
  },
  
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];



