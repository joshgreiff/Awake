const { faker }  = require('@faker-js/faker');

const db = require('../config/connection')
const { User, Community, Quest, Milestone, Daily, Post} = require('../models');

db.once('open', async () => {
    await User.deleteMany({})
    await Community.deleteMany({})
    await Quest.deleteMany({})

    const userData = [];

    for (let i = 0; i < 50; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        const coins = 0;
        const level = 1;
        const exp = 0;

        userData.push({ username, email, password, coins, level, exp})
    }

    const createdUsers = await User.collection.insertMany(userData);
    console.log(createdUsers);

    // for (let i = 0; i < 100; i += 1) {
    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    //     console.log(randomUserIndex);
    //     const { _id: userId } = createdUsers[randomUserIndex];
    
    //     let friendId = userId;
    
    //     while (friendId === userId) {
    //       const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    //       friendId = createdUsers[randomUserIndex];
    //     }
    
    //     await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
    // }

    // let createdQuests = []
    // for (let i =0; i < 100; i++) {
    //     const questTitle = faker.lorem.words()
    //     const questText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    //     const { username, _id: userId } = createdUsers.[randomUserIndex];

    //     const createdQuest = await Quest.create({ questTitle, questText, username })

    //     const updatedUser = await User.updateOne(
    //         { _id: userId },
    //         { $push: { quests: createdQuest._id}}
    //     )

    //     createdQuests.push(createdQuest);
    // }

    console.log("Done :)");
    process.exit(0);
})