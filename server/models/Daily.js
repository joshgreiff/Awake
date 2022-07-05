const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const dailySchema = new Schema(
  {
    dailyTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30
    },
    dailyDescription: {
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
    // Unsure if this is the corrcet way to do the 'createdBy'
    createdBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
    },
    difficulty: {
        type: String,
        minlength: 1,
        maxlength: 15
    },
    timesCompleted: {
        type: String
    }
    
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Daily = model('Daily', dailySchema);

module.exports = Daily;