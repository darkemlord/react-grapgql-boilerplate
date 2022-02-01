const userController = require('../controllers/user');


const resolvers = {
  Query: {
    getUser: () => userController.getUser()
  },
  Mutation: {
    //user
    register: async (_, { input }) => userController.register(input)
  },
};

module.exports = resolvers;
