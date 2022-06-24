'use strict';

/**
 * flow service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flow.flow');
