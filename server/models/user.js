const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

// When saving
userSchema.pre('save', function(next) {
  const user = this
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

// our User model gets a method called comparePassword
userSchema.methods.comparePassword = function(canidatePassword, cb) {
  // Behind the scenes compare
  bcrypt.compare(canidatePassword, this.password, function(err, match) {
    console.log(err)
    if (err) return cb(err)
    // if match is true, user is accepted
    cb(null, match)
  })
}

const model = mongoose.model('user', userSchema)

module.exports = model