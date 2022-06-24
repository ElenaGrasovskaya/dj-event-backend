'use strict';

/**
 *  flow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::flow.flow');
