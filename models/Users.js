const mongoose = require("mongoose");

const users = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("User", users);