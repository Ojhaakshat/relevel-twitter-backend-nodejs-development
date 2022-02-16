const express = require("express");
const router = express.Router();
const Tweet = require('../models/Tweet')

const UserController = require('../controllers/user.controller');
const { isLoggedIn } = require("../middleware/isLoggedin");
const User = require("../models/User");

router.get('/:id', isLoggedIn, (req, res) => {
    const {id } = req.params;
    const user = User.findById(id);
    // const tweets = 
    res.render('profile', {user, });
})


router.delete('/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    const user = User.findById(req.user._id);
    await user.updateOne({$pull: {tweets: req.params.id}});
    res.redirect('/tweet');
})

// Create routes for user here
module.exports = router;