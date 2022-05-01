'use strict';

/**
 *  blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({

    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::blog.blog', {
            ...query,
            populate: {
                image: true,
                auteur: true,
                auteur: {
                    populate: {
                        avatar: true,
                    }
                },
                categories: true,
                    
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    },

    

}));
