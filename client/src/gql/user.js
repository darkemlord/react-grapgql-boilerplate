import { gql } from "@apollo/client";

export const REGISTER_USER = gql `
  mutation Mutation($input: UserInput) {
    register(input: $input) {
      name
      username
      password
      email
      createAt
    }
  }
`
