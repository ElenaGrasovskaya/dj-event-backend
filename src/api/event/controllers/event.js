'use strict';

/**
 *  event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


/*module.exports = {
    async me(ctx) {
        const user = ctx.state.user

        if(!user) {
            return ctx.badRequest(null, [{ messages: [{id: "No authorization Header was found"}]},]);
        }
    }
}*/
module.exports = createCoreController('api::event.event');

