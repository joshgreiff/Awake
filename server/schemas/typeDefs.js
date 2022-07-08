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
        milestones: [Milestone]
        dailies: [Daily]
        friends: [User]
    }

    type Quest {
        _id: ID!
        questTitle: String!
        questDescription: String!
        createdAt: String
        username: User
        milestones: [Milestone]
        dailies: [Daily]
    }

    type Daily {
        _id: ID!
        dailyTitle: String!
        dailyDescription: String
        createdAt: String
        username: User
        difficulty: String
        timeCompleted: Int
    }

    type Milestone {
        _id: ID!
        milestoneTitle: String!
        milestoneDescription: String
        createdAt: String
        username: User
    }

    type Post {
        _id: ID!
        postTitle: String!
        postContent: String!
        createdAt: String
        username: User
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
        milestones(quest: String!): [Milestone]
        milestone(_id: ID!): Milestone
        dailies(quest: String!): [Daily]
        daily(_id: ID!): Daily
        communities: [Community]
        community(_id: ID!): Community
        posts(community: String): [Post]
        post(_id: ID!): Post

    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!):Auth
        addQuest(username: String!, title: String!, description: String): Quest
        addMilestone(username: String!, quest: String!, title: String!, description: String): Milestone
        addDaily(username: String!, quest: String!, title: String!, description: String, difficulty: String!): Daily
        addCommunity(username: String!, title: String!, description: String): Community
        addPost(postTitle: String, postContent: String!): Post
    }
    type Auth {
        token: ID!
        user: User
    }
`;


module.exports = typeDefs;