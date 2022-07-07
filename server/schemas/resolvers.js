const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Post, Quest, Milestone } = require('../models');
const { signToken } = require('../utils/auth');

// ADD LOGIN METHOD/MUTATION

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
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },
        // get all of a user's quests
        quests: async (parent, { username }) => {
            return Quest.find({ username })
                .populate('questTitle')
                .populate('questDescription')
                .populate('dailes')
                .populate('createdAt')
        },
        // get all of a quest's milestones
        milestones: async (parent, { _id }) => {
            return Quest.find({ _id })
                .populate('milestones');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid email or password')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Invalid email or password')
            }

            const token = signToken(user);

            return {token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const thought = await Thought.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { thoughts: thoughts._id } },
                    { new: true }
                )

                return thought;
            }

            throw new AuthenticationError('You must be logged in to post');
        }
    }
};

module.exports = resolvers;