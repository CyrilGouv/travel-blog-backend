'use strict';

/**
 * voiture service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::voiture.voiture');
