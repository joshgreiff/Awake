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



const Milestone = model('Milestone', milestoneSchema);

module.exports = Milestone;
