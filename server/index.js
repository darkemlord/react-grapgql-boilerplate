const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolvers');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: ".env"})

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  app.listen(3000, () => {
  server();
})
});

const server = () => {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers
  });
  serverApollo.listen().then(({url}) => {
    console.log(`server listen at ${url}`)
  })
}
