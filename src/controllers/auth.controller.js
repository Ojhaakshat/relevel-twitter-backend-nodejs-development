const passport = require('passport')
const User = require('../models/User');

const loginForm = (req,res) => {
    //login api logic here
    res.render('login')
}

const registerForm = (req,res) => {
    res.render('register')
}

const register = async (req,res) => {
    const {email, username, password, name} = req.body;
    const user = new User({username, email, name});
    user.following.push(user._id);
    const newuser = await User.register(user, password);
    console.log("dnfajksnfsa");
    // console.log(newuser);
    res.redirect('/tweet');
}

const logout = (req, res) => {
    // console.log(req.user);
    req.logOut();
    res.redirect('/');
}
const AuthController = {
    loginForm,
    registerForm,
    register,
    logout
};

module.exports = AuthController;