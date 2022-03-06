const Tweet = require('../models/Tweet')
const User = require("../models/User");

const postTweet = async (req, res) => {
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
}

//gives tweets of my following users
const getTweets = async(req, res) => {
    const user = req.user;
     // Adding Pagination
    const limitValue = req.query.limit || 10;
    const skipValue = req.query.skip || 0;
    const tweets = await Tweet.find({}).sort({date: 'desc'}).limit(limitValue).skip(skipValue);
    const users = await User.find({});
    res.render('tweet', {tweets, users, user});
}


const deleteTweet = (req, res) => {
    //deleteTweet api logic here
};

const likeTweet = (req, res) => {
    //likeTweet api logic here
};

const TweetController = {
    getTweets,
    deleteTweet,
    likeTweet,
    postTweet
};

module.exports = TweetController;