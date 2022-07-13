const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Post, Quest, Milestone, Community, Daily } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // find all users
        me: async ( parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('posts')
                    .populate('coins')
                    .populate('level')
                    .populate('exp')
                    .populate('quests')

                return userData;
            }

            throw new AuthenticationError('Not logged in.')
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('posts')
                .populate('coins')
                .populate('level')
                .populate('exp')
                .populate('quests')
        },
        // find one user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('posts')
                .populate('coins')
                .populate('level')
                .populate('exp')
                .populate('friends')
                .populate('quests')
        },
        // find all posts
        posts: async (parent, { user }) => {
            // const params = username ? { username } : {};
            return Post.find({ user }).sort({ createdAt: -1 })
                .populate('postTitle')
                .populate('postContent')
                .populate('createdAt')
        },
        // find one post by id
        post: async (parent, { _id }) => {
            return Post.findOne({ _id })
                .populate('postTitle')
                .populate('postContent')
                .populate('createdAt')
        },
        // get all of a user's quests
        quests: async (parent, { username }) => {
            return Quest.find({ username })
                .populate('questTitle')
                .populate('questDescription')
                .populate('dailies')
                .populate('milestones')
                .populate('createdAt')
                .populate('username')
        },
        quest: async (parent, { _id }) => {
            return Quest.findOne({ _id: _id })
                .populate('questTitle')
                .populate('questDescription')
                .populate('dailies')
                .populate('milestones')
                .populate('createdAt')
                .populate('username')
        },
        // get all of a quest's milestones
        // milestones: async (parent, { questId }) => {
        //     return Quest.findOne({ _id: questId })
        //         .populate('milestones')
        // },
        // milestone: async (parent, { _id }) => {
        //     return Milestone.findOne({ _id})
        //         .populate('milestoneTitle')
        //         .populate('milestoneDescription')
        //         .populate('username')
        // },
        // communities: async (parent, args) => {
        //     return Community.find()
        //         .populate('communityTitle')
        //         .populate('communityDescription')
        // },
        // community: async (parent, { _id } ) => {
        //     return Community.findOne({ _id: _id })
        //         .populate('communityTitle')
        //         .populate('communityDescription')
        //         .populate('users')
        //         .populate('posts')
        //         .populate('quests')
        // },
        // dailies: async (parent, { _id }) => {
        //     return Quest.findOne({ _id: _id })
        //         .populate('dailies')
        //         .populate('username')
        // },
        // daily: async (parent, { _id } ) => {
        //     return Daily.findOne({ _id: _id })
        //         .populate('dailyTitle')
        //         .populate('dailyDescription')
        //         .populate('username')
        //         .populate('difficulty')
        //         .populate('timesCompleted')
        // }
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
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                )

                return post;
            }

            throw new AuthenticationError('You must be logged in to post');
        },
        addQuest: async (parent, args, context) => {
            if(context.user) {
                const quest = await Quest.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { quests: quest._id } },
                    { new: true }
                )

                return quest
            }

            throw new AuthenticationError('You must be logged in to create a quest.')
        },
        addMilestone: async (parent, { questId, milestoneTitle, milestoneDescription }, context ) => {
            if(context.user) {
                // const milestone = await Milestone.create({ milestoneTitle, milestoneDescription, username: context.user.username })
                
                
                // await Quest.findOneAndUpdate(
                //     { _id: questId },
                //     { $push: { milestones: milestone._id }},
                //     { new: true }
                // )

                // await User.findOneAndUpdate(
                //     { _id: context.user._id },
                //     { $push: { milestones: milestone._id} },
                //     { new: true}
                // )

                // return milestone

                const updatedQuest = await Quest.findOneAndUpdate(
                    { _id : questId },
                    {$push: { milestones: { milestoneTitle, milestoneDescription, username: context.user.username } } },
                    { new : true }
                )

                return updatedQuest;
            }

            throw new AuthenticationError('You must be logged in to add a milestone.')
        },
        addDaily: async (parent, { questId, dailyTitle, dailyDescription }, context) => {
            if(context.user) {
                // const daily = await Daily.create({ dailyTitle, dailyDescription, username: context.user.username })
                
                
                // await Quest.findOneAndUpdate(
                //     { _id: questId },
                //     { $push: { dailies: daily._id }},
                //     { new: true }
                // )

                // await User.findOneAndUpdate(
                //     { _id: context.user._id },
                //     { $push: { dailies: daily._id} },
                //     { new: true}
                // )

                // return daily

                const updatedQuest = await Quest.findOneAndUpdate(
                    { _id: questId },
                    { $push: { dailies: { dailyTitle, dailyDescription, username: context.user.username } } },
                    { new: true }
                )

                return updatedQuest;
            }

            throw new AuthenticationError('You must be logged in to add a daily quest.')
        }
    }
};

module.exports = resolvers;