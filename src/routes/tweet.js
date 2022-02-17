const express = require("express");
const router = express.Router();
const Tweet = require('../models/Tweet')
const {isLoggedIn} = require('../middleware/isLoggedin')

const TweetController = require('../controllers/tweet.controller');
const User = require("../models/User");

router.route('/')
    .get(isLoggedIn, TweetController.getTweets)
    .post(TweetController.postTweet);


// Create routes for product here
module.exports = router;