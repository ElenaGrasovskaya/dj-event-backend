'use strict';

/**
 *  event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeEntity } = require('strapi-utils');
//


module.exports = createCoreController("api::event.event", ({ strapi }) => ({
    async me(ctx) {
        const user = ctx.state.user

        if(!user) {
            return ctx.badRequest(null,
                 [{ messages: [{id: "No authorization Header was found"}]},]);
        }

        const data = await strapi.services.events.find({user: user.id})
        if(!data) {
            return ctx.notFound()
        }
        return sanitizeEntity(data, {model:strapi.models.events})
    }
}));

module.exports = createCoreController('api::event.event');