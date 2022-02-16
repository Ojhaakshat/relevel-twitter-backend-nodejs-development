
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
    }
})

module.exports = mongoose.model('Tweet', tweetSchema);