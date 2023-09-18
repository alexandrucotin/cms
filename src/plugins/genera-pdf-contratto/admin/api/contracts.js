import { request } from "@strapi/helper-plugin";

export const contractRequest = {
  getAllContracts: async () => {
    return await request("/genera-pdf-contratto/contracts", {
      method: "GET",
    });
  },
};
