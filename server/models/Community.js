const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const communitySchema = new Schema(
  {
    communityTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30
    },
    communityDescription: {
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
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
      },
    ],
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    quests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quest'
        }
    ],
    
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Community = model('Community', communitySchema);

module.exports = Community;