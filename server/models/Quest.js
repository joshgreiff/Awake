const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const dailySchema = require('./Daily')
const milestoneSchema = require('./Milestone')

const questSchema = new Schema(
  {
    questTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30
    },
    questDescription: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280
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
    difficulty: {
      type: String,
      minlength: 1,
      maxlength: 15
    },
    milestones: [milestoneSchema],
    dailies: [dailySchema],
  },
  {
    toJSON: {
      getters: true
    }
  }
);
 


const Quest = model('Quest', questSchema);

module.exports = Quest;
