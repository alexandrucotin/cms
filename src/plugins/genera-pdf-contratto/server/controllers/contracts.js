'use strict';

module.exports = {
    async find(ctx){
        try{
            return await strapi.plugin("genera-pdf-contratto").service("contractsService").find(ctx.query)
        }catch (err){
            ctx.throw(500, err)
        }
    }
}