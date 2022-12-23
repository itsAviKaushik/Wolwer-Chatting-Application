const mongoose = require("mongoose");

const chats = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    chatType: {
        type: String,
        required: true
    },
    lastMessage: {
        type: String,
        required: true
    },
    chatTitle: String,
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Chat", chats);