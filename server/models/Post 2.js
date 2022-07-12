const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postContent: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 250
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
 


const Post = model('Post', postSchema);

module.exports = Post;
