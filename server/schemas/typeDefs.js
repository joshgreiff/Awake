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
        createdAt: Date
        username: User
        milestones: [Milestone]
        dailies: [Daily]
    }

    type Daily {
        dailyTitle: String!
        dailyDescription: String
        createdAt: Date
        username: User
        difficulty: String
        timeCompleted: Int
    }

    type Milestone {
        milestoneTitle: String!
        milestoneDescription: String
        rewards: [Reward]
        createdAt: Date
        username: User
    }

    type Post {
        postContent: String!
        createdSt: Date
        username: User
    }

    type Community {
        communityTitle: String!
        communityDescription: String
        createdAt: Date
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
        posts(community: String): [post]
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