'use strict';

/**
 * backup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::backup.backup');
