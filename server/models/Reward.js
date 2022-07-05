const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const rewardSchema = new Schema(
  {
    rewardTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30
    },
    rewardDescription: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280
    },
    coins: {
        type: Number,
        required: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Reward = model('Reward', rewardSchema);

module.exports = Reward;
