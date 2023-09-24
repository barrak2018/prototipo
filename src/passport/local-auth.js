const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require("../models/users")

passport.use('local-sigin', new LocalStrategy({
    usernameField: 'ci',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, ci, password, done)=>{
    const user = new User()
    user.ci = ci
    user.password = password

     await user.save()
    

}))