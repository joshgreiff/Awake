const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true
    },
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
    user: {
      type: String,
      required: true
    },
    // community: {
    //   type: String,
    //   required: false
    // }
  },
  {
    toJSON: {
      getters: true
    }
  }
);
 


const Post = model('Post', postSchema);

module.exports = Post;
