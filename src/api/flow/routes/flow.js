'use strict';

/**
 * flow router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::flow.flow');
