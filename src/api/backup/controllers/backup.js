'use strict';

/**
 * backup controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::backup.backup');
