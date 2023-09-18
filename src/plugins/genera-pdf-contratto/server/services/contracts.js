"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    const contract = await strapi.entityService.findMany(
      "api::contratto.contratto",
      {
        populate: "deep",
      }
    );
    return contract;
  },
});
