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
    // Unsure if this is the corrcet way to do the 'createdBy' ref
    createdBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
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
