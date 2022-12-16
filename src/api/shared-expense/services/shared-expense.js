'use strict';

/**
 * shared-expense service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-expense.shared-expense');
