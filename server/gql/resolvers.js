const userController = require('../controllers/user');

const resolvers = {
  Query: {
    getUser: () => {
      console.log('hello papis')
      return null
    },
  },
  Mutation: {
    //user
    register: async (_, { input }) => userController.register(input)
  },
};

module.exports = resolvers;
