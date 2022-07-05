const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Me {
        _id: ID
    }
    type User {
        _id: ID
    }
    type Query {
        Me: User
    }
    type Mutations {
        login(Me: String!):Auth
    }
    type Auth {
        token: ID!
    }
`;


module.exports = typeDefs;