const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// Local Strategy
const localLogin = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  // Verification if correct user
  User.findOne({
    email: email
  }, (err, user) => {
    if (err) return done(err)
    if(!user) return done(null, false)
    // compare password
    user.comparePassword(password, function(err, match) {
      if (err) return done(err)
      if (!match) return done(null, false)

      return done(null, user)
    })
  })
})

// Options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

  // Find any user with the right ID
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false)

    user ? done(null, user) : done(null, false)
  })
})

// Use strategy in passport
passport.use(localLogin)
passport.use(jwtLogin)