const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Post, Quest, Milestone, Community, Daily } = require('../models');
const { signToken } = require('../utils/auth');

// ADD LOGIN METHOD/MUTATION

const resolvers = {
    Query: {
        // find all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('posts')
                .populate('coins')
                .populate('level')
                .populate('exp')
        },
        // find one user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('posts')
                .populate('coins')
                .populate('level')
                .populate('exp')
                .populate('quests')
                .populate('friends')
        },
        // find all posts
        posts: async (parent, { user }) => {
            // const params = username ? { username } : {};
            return Post.find({ user }).sort({ createdAt: -1 })
                .populate('postTitle')
                .populate('postContent')
                .populate('createdAt')
                .populate('user')
        },
        // find one post by id
        post: async (parent, { _id }) => {
            return Post.findOne({ _id })
                .populate('postTitle')
                .populate('postContent')
                .populate('createdAt')
                .populate('user')
        },
        // get all of a user's quests
        quests: async (parent, { username }) => {
            return Quest.find({ username })
                .populate('questTitle')
                .populate('questDescription')
                .populate('dailes')
                .populate('createdAt')
        },
        quest: async (parent, { _id }) => {
            return Quest.findOne({ _id: _id })
                .populate('questTitle')
                .populate('questDescription')
                .populate('dailes')
                .populate('createdAt')
        },
        // get all of a quest's milestones
        milestones: async (parent, { _id }) => {
            return Quest.findOne({ _id })
                .populate('milestones')
        },
        milestone: async (parent, { _id }) => {
            return Milestone.findOne({ _id: _id})
                .populate('milestoneTitle')
                .populate('milestoneDescription')
                .populate('createdAt')
        },
        communities: async (parent, args) => {
            return Community.find()
                .populate('communityTitle')
                .populate('communityDescription')
        },
        community: async (parent, { _id } ) => {
            return Community.findOne({ _id: _id })
                .populate('communityTitle')
                .populate('communityDescription')
                .populate('users')
                .populate('posts')
                .populate('quests')
        },
        dailies: async (parent, { _id }) => {
            return Quest.findOne({ _id: _id })
                .populate('dailies')
        },
        daily: async (parent, { _id } ) => {
            return Daily.findOne({ _id: _id })
                .populate('dailyTitle')
                .populate('dailyDescription')
                .populate('username')
                .populate('difficulty')
                .populate('timesCompleted')
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
                console.log(context.user.username)
                const post = await Post.create({ ...args, userid: context.user._id });
                console.log(post)

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                )

                return post;
            }

            throw new AuthenticationError('You must be logged in to post');
        }
    }
};

module.exports = resolvers;