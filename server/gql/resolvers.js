const resolvers = {
  Query: {
    getUser: () => {
      console.log('hello papis')
      return null
    },
  },
};

module.exports = resolvers;
