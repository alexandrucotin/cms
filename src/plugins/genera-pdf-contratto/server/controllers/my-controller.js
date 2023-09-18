'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('genera-pdf-contratto')
      .service('myService')
      .getWelcomeMessage();
  },
});
