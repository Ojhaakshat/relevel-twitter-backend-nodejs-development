const express = require("express");
const router = express.Router();
const Tweet = require('../models/Tweet')

const UserController = require('../controllers/user.controller');
const { isLoggedIn } = require("../middleware/isLoggedin");
const User = require("../models/User");

router.route('/:id')
    .get(isLoggedIn, UserController.getUserStats)
    .delete(isLoggedIn, UserController.deleteTweet)
    
router.route('/all/:id').get(UserController.searchUsers)


router.route('/follow/:curuserId/:userId').post(UserController.follow);

router.route('/unfollow/:curuserId/:userId').post(UserController.unfollow);

router.route('/followers/:curuserId').get(UserController.getFollowers)
router.route('/following/:curuserId').get(UserController.getFollowing)


// Create routes for user here
module.exports = router;