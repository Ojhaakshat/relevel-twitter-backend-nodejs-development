
const User = require("../models/User");
const Tweet = require('../models/Tweet')


const follow = async (req, res) => {
    //follow api logic here
    const user = User.findById(req.params.curuserId);

    await user.updateOne({$push: {following: req.params.userId}})
    const otheruser = User.findById(req.params.userId);
    await otheruser.updateOne({$push: {followers: req.params.curuserId}})
    res.redirect(`/user/all/${req.params.curuserId}`);

}

const unfollow = async (req, res) => {
    const user = User.findById(req.params.curuserId);
    await user.updateOne({$pull: {following: req.params.userId}})
    const otheruser = User.findById(req.params.userId);
    await otheruser.updateOne({$pull: {followers: req.params.curuserId}})
    res.redirect(`/user/all/${req.params.curuserId}`);
}

const getUserStats = async (req, res) => {
    //getUserStats api logic and all tweets for a user api logic here
    const {id } = req.params;
    const user = await User.findById(id);
    const tweets = await Tweet.find({});
    // console.log(user.toJSON());
    res.render('profile', {user, tweets});
}

const searchUsers = async(req, res) => {
    //searchUsers api logic here
    const {id } = req.params;
    const user = await User.findById(id);
    const users = await User.find({});
    res.render('allusers', {curuser:user, users});
}

const deleteTweet = async(req, res) => {
    // delete tweet logic api here
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    const user = User.findById(req.user._id);
    await user.updateOne({$pull: {tweets: req.params.id}});
    res.redirect('/tweet');
}

const getFollowing = async (req, res) => {
    const user = User.findById(req.params.curuserId);
    const following = user.following;
    res.send(following);
}

const getFollowers = async (req, res) => {
    const user = User.findById(req.params.curuserId);
    const followers = user.followers;
    res.send(followers);
}


const UserController = {
    follow,
    unfollow,
    getUserStats,
    searchUsers,
    deleteTweet,
    getFollowing,
    getFollowers

};

module.exports = UserController;