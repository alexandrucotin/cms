module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },

  {
    method: 'GET',
    path: '/contracts',
    handler: 'contractsController.find',
    config: {
      policies: [],
      auth:false
    },
  },
];
