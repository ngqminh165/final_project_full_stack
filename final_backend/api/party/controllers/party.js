"use strict";
const jwt_decode = require("jwt-decode");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOne: async (ctx) => {
    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
      try {
        const { id: id_party, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        const parties = await strapi.query("party").find({});
        const invited = parties.filter((item) =>
          item.invitedList.find((element) => element.id === id_party)
            ? true
            : false
        );
        //console.log("parties ", parties);

        console.log("parties ", invited);

        return {};
      } catch (err) {
        // It will be there!

        return handleErrors(ctx, err, "unauthorized");
      }
    }
  },

  find: async (ctx) => {
    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
      try {
        const { id: id_party, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        console.log(id_party)
        const parties = await strapi.query("party").find({});
        
        parties.forEach(item => {
            item.isInvited = false;
            item.isHost = false;
            if (item.invitedList.find(element => element.id === id_party))
                item.isInvited = true;
            if (item.host.id === id_party)
                item.isHost = true;
        });
        return parties;
      } catch (err) {
        // It will be there!

        //return handleErrors(ctx, err, "unauthorized");
      }
    }
  },

};
