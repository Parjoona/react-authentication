const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

// session: false * dont use cookies
const requireAuth = passport.authenticate('jwt', {
  session: false
})

const requireSignin = passport.authenticate('local', {
  session: false
})

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({
      status: 'Logged in'
    })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}