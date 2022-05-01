'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::category.category', {
            ...query,
            populate: {
                blogs: {
                    populate: {
                        image: true,
                        auteur: true,
                        auteur: {
                            populate: {
                                avatar: true,
                            }
                        }
                    },
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    },

    async findOne(ctx) {
        const { id } = ctx.request.params
        const { query } = ctx

        const entity = await strapi.entityService.findOne('api::category.category', id, {
            ...query,
            populate: {
                blogs: {
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
                },
            },
        })

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

        return this.transformResponse(sanitizedEntity)
    }
}));
