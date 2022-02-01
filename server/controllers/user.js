const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: ".env"});
//GET login token function
const createToken = (user, SECRET_KEY, expiresIn) => {
  const {id, name, email, username} = user;
  const payload = {
    id,
    name,
    email,
    username
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

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

  // check if the email exist
  const userFound = await User.findOne({ email: email.toLowerCase() });
  if(!userFound) throw new Error("Error in email or password");

  // Compare the password
  const passwordSuccess = await bcryptjs.compare(password, userFound.password);
  if(!passwordSuccess) throw Error("Error in email or password");

  //get the login token
  return {
    token: createToken(userFound, process.env.SECRET_KEY, "24h")
  }
}
module.exports = { register, getUser, login }
