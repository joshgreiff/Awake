const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const milestoneSchema = new Schema(
  {
    milestoneTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30
    },
    milestoneDescription: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280
    },
    rewards: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reward'
        }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },

    username: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      minlength: 1,
      maxlength: 15
  },
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Milestone = model('Milestone', milestoneSchema);

module.exports = Milestone;
