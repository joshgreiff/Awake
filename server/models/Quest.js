const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    // Unsure if this is the corrcet way to do the 'createdBy' ref
    createdBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
    },
    milestones: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Milestone'
        }
    ],
    dailies: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Daily'
        }
    ],
  },
  {
    toJSON: {
      getters: true
    }
  }
);
 


const Quest = model('Quest', questSchema);

module.exports = Quest;
