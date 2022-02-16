const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

const passport = require('passport')
const User = require('../models/User');
// register
router.get('/register', (req,res) => {
    res.render('register')
})
router.post('/register', async (req,res) => {
    const {email, username, password, name} = req.body;
    const user = new User({username, email, name});
    const newuser = await User.register(user, password);
    console.log("dnfajksnfsa");
    // console.log(newuser);
    res.redirect('/tweet');
})
//login
router.get('/login', (req,res) => {
    res.render('login')
})
router.post('/login', passport.authenticate('local', { successRedirect: '/tweet', failureRedirect: '/login', failureFlash: true }), (req,res) => {

})
//logout 
router.get('/logout', (req, res) => {
    console.log(req.user);
    req.logOut();
    res.redirect('/');
})

// Create routes for user here
router.post('login', AuthController.login);
module.exports = router;