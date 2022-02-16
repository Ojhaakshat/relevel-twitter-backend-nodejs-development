const express = require("express");
const router = express.Router();
const Tweet = require('../models/Tweet')

const UserController = require('../controllers/user.controller');
const { isLoggedIn } = require("../middleware/isLoggedin");
const User = require("../models/User");

router.get('/:id', isLoggedIn, async (req, res) => {
    const {id } = req.params;
    const user = await User.findById(id);
    const tweets = await Tweet.find({});
    // console.log(user.toJSON());
    res.render('profile', {user, tweets});
})

router.get('/all/:id', async(req, res) => {
    const {id } = req.params;
    const user = await User.findById(id);
    const users = await User.find({});
    res.render('allusers', {curuser:user, users});
})

router.delete('/:id', isLoggedIn, async(req, res) => {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    const user = User.findById(req.user._id);
    await user.updateOne({$pull: {tweets: req.params.id}});
    res.redirect('/tweet');
})

router.post('/follow/:curuserId/:userId', async (req, res) => {
    const user = User.findById(req.params.curuserId);

    await user.updateOne({$push: {following: req.params.userId}})
    const otheruser = User.findById(req.params.userId);
    await otheruser.updateOne({$push: {followers: req.params.curuserId}})
    res.redirect(`/user/all/${req.params.curuserId}`);

})
router.post('/unfollow/:curuserId/:userId', async (req, res) => {
    const user = User.findById(req.params.curuserId);
    await user.updateOne({$pull: {following: req.params.userId}})
    const otheruser = User.findById(req.params.userId);
    await otheruser.updateOne({$pull: {followers: req.params.curuserId}})
    res.redirect(`/user/all/${req.params.curuserId}`);
})

// Create routes for user here
module.exports = router;