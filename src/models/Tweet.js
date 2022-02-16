
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    tweet: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
    },
    likes: {
        type: Number
    }
})

module.exports = mongoose.model('Tweet', tweetSchema);