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
 


const Post = model('Post', postSchema);

module.exports = Post;
