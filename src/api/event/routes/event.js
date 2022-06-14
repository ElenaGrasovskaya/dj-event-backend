'use strict';

/**
 * event router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;



module.exports = createCoreRouter('api::event.me');
module.exports = createCoreRouter('api::event.event');