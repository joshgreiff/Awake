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
        posts: [Post]
        quests: [Quest]
    }

    type Quest {
        _id: ID!
        questTitle: String!
        questDescription: String!
        createdAt: String
        username: String!
        milestones: [Milestone]
        dailies: [Daily]
    }

    type Daily {
        _id: ID!
        dailyTitle: String!
        dailyDescription: String
        createdAt: String
        username: String!
        difficulty: String
        timeCompleted: Int
    }

    type Milestone {
        _id: ID!
        milestoneTitle: String!
        milestoneDescription: String
        createdAt: String
        username: String!
    }

    type Post {
        _id: ID!
        postTitle: String!
        postContent: String!
        createdAt: String
        username: String
    }

    type Community {
        _id: ID!
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
        quest(_id: ID!): Quest
        posts(username: String): [Post]
        post(_id: ID!): Post

    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!):Auth
        addQuest(username: String, questTitle: String!, questDescription: String): Quest
        addMilestone(username: String, questId: ID!, milestoneTitle: String!, milestoneDescription: String): Quest
        addDaily(username: String, questId: ID!, dailyTitle: String!, dailyDescription: String, difficulty: String!): Quest
        addPost(postTitle: String!, postContent: String!, username: String): Post
    }
    type Auth {
        token: ID!
        user: User
    }
`;


module.exports = typeDefs;