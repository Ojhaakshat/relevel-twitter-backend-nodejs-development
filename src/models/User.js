// User Model
const Tweet = require('./Tweet');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    name: {
        type: String,
        required: true,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tweets: [{type: Schema.Types.ObjectId, ref: "Tweet"}]
})

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userSchema);