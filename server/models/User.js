const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    coins: {
        type: Number,
        required: false,
        default: 0
    },
    level: {
        type: Number,
        required: false,
        default: 1
    },
    exp: {
        type: Number,
        required: false,
        default: 0
    },
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
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
<<<<<<< HEAD
    ]  
=======
    ]
>>>>>>> 0bb60a28e8f5be3f398830cc0a1b9923b5b2208c
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

userSchema.virtual('questCount').get(function() {
  return this.quests.length;
})



userSchema.virtual('toNextLevel').get(function() {
  const level = this.level
  const toNext = Math.round( 0.04 * (level ** 3) + 0.8 * (level ** 2) + 2 * level)
  return toNext
})

const User = model('User', userSchema)

module.exports = User