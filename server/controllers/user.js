const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const register = async (input) => {
  const newUser = input
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();

  const { email, username, password } = newUser;

  //Check if the email is already in use

  const foundEmail = await User.findOne({ email });
  if(foundEmail) throw new Error("the email is already in use");

  // Check if the username exist
  const foundUserName = await User.findOne({ username });
  if(foundUserName) throw new Error("The username already exist");

  // Encrypt
  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);

  try{
    const user = new User(newUser);
    user.save();
    return user

  } catch(err) {
    console.log(err)
  }
};

const getUser = () => {
  console.log('hello from the get user');
}

const login = async (input) => {
  const { email, password } = input;
  console.log("Email: " + email);
  console.log("Password: " + password);
}
module.exports = { register, getUser, login }
