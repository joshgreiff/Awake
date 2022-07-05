const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../models')

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
        }
    },
    Mutations: {}
};

module.exports = resolvers;