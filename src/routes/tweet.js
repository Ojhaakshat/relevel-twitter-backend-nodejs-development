const express = require("express");
const router = express.Router();
const Tweet = require('../models/Tweet')
const {isLoggedIn} = require('../middleware/isLoggedin')

const TweetController = require('../controllers/tweet.controller');
const User = require("../models/User");

router.get('/', isLoggedIn, async(req, res) => {
    const user = req.user;
    const tweets = await Tweet.find({});
    const users = await User.find({});
    res.render('tweet', {tweets, users, user});
})
router.post('/', async (req, res) => {
    const tweet = new Tweet(req.body.tweet);
    tweet.likes = 0;
    tweet.username = req.user.username;
    await tweet.save();
    // // console.log(req.user);
    // const user = User.findByIdAndUpdate(req.user._id, { "$push": { "tweets": tweet._id } },{ "new": true, "upsert": true });
    // // console.log(user);
    // console.log(user.tweets);
    req.user.tweets.push(tweet._id);
    req.user.save();
    res.redirect('/tweet');
})


// Create routes for product here
module.exports = router;