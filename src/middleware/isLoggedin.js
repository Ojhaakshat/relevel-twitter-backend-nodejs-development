const User = require('../models/User');
module.exports.isLoggedIn = (req, res, next) => {
    // console.log(curUser);
    // console.log(req.user);
    if(!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    next();
}