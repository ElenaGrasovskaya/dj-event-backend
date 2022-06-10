module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ["https://portal.libramebel.od.ua/account/login", "https://portal.libramebel.od.ua","https://libraportal.vercel.app" ]
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

module.exports = {
  settings: {
    cors: {
      origin: ['http://localhost', 'https://mysite.com', 'https://www.mysite.com'],
    },
  },
}


