const { gql } = require("apollo-server")

//GraphQL schema
const typeDefs = gql `
  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    siteWeb: String
    description: String
    password: String
    createAt: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    #User Query
    getUser: User
  }

  type Mutation {
    #User
    register(input: UserInput ): User
  }
`
module.exports = typeDefs;
