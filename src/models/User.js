// User Model
const Tweet = require('./Tweet');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    }, 
    name: {
        type: String,
        required: true,
        unique: true
    },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tweets: [{type: Schema.Types.ObjectId, ref: "Tweet"}]
})


module.exports = mongoose.model('User', userSchema);