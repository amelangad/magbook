import mongoose, { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt'
import postSchema from '../models/post'


const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
email: {
    type: String,
    unique: true
  },
  password: String,
  avatar: String,
})

userSchema.pre("save", function (next) {
  const user = this
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError)
          }
          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;