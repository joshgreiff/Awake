const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Post } = require('../models');

const resolvers = {
    Query: {
        // find all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('coins')
                .populate('level')
                .populate('exp')
        },
        // find one user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('coins')
                .populate('level')
                .populate('exp')
                .populate('quests')
                .populate('friends')      
        },
        // find all posts
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        // find one post by id
        post: async(parent, { _id }) => {
            return Post.findOne({ _id });
        }
    },
    Mutations: {}
};

module.exports = resolvers;