const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const passport = require('passport')
const User = require('../models/User');


// register
router.route('/register')
    .get(AuthController.registerForm)
    .post(AuthController.register)

//login
router.route('/login')
    .get(AuthController.loginForm)
    .post(passport.authenticate('local', { successRedirect: '/tweet', failureRedirect: '/login', failureFlash: true }), (req,res) => {

})
//logout 
router.route('/logout').get(AuthController.logout)

module.exports = router;