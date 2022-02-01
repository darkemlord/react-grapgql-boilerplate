const { gql } = require("apollo-server")

//GraphQL schema
const typeDefs = gql `
  type User {
    id: ID
    name: String
    username: String
  }

  type Query {
    #User Query
    getUser: User
  }
`
module.exports = typeDefs;
