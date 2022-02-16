const express = require("express");
const router = express.Router();
const Tweet = require('../models/Tweet')

const TweetController = require('../controllers/tweet.controller');

router.get('/', async(req, res) => {
    const tweets = await Tweet.find({});
    res.render('tweet');
})
router.post('/', async (req, res) => {
    const tweet = new Tweet(req.body.tweet);
    tweet.user_name = 'default',
    tweet.likes = 0;
    await tweet.save();
    res.redirect('/');
})


// Create routes for product here
module.exports = router;