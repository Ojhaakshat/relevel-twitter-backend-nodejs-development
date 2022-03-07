
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    likes: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now(),
    },

})

module.exports = mongoose.model('Tweet', tweetSchema);