const User = require('../models/user');

const resolvers = {
  Query: {
    getUser: () => {
      console.log('hello papis')
      return null
    },
  },
  Mutation: {
    //user
    register: async (_, { input }) => {
      const newUser = input
      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();
      newUser.name = newUser.name.toLowerCase();

      const { email, username, password } = newUser;

      //Check if the email is already in use

      const foundEmail = await User.findOne({ email });
      if(foundEmail) throw new Error("the email is already in use");
      // Check if the username exist
      const foundUserName = await User.findOne({ username });
      if(foundUserName) throw new Error("The username already exist")

      try{
        const user = new User(newUser);
        user.save();
        return user

      } catch(err) {
        console.log(err)
      }
    }
  },
};

module.exports = resolvers;
