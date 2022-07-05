const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        coins: Int
        level: Int
        exp: Int
        quests: [Quest]
        milestones: [Milestone]
        dailies: [Daily]
        friends: [User]
    }

    type Quest {
        questTitle: String!
        questDescription: String!
        createdAt: String
        username: User
        milestones: [Milestone]
        dailies: [Daily]
    }

    type Daily {
        dailyTitle: String!
        dailyDescription: String
        createdAt: String
        username: User
        difficulty: String
        timeCompleted: Int
    }

    type Milestone {
        milestoneTitle: String!
        milestoneDescription: String
        createdAt: String
        username: User
    }

    type Post {
        postContent: String!
        createdSt: String
        username: User
    }

    type Community {
        communityTitle: String!
        communityDescription: String
        createdAt: String
        username: User
        users: [User]
        posts: [Post]
        quests: [Quest]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        quests(username: String!): [Quest]
        milestones(quest: String!): [Milestone]
        dailies(quest: String!): [Daily]
        communities: [Community]
        posts(community: String): [Post]
    }
    type Mutations {
        login(Me: String!):Auth
    }
    type Auth {
        token: ID!
        user: User
    }
`;


module.exports = typeDefs;