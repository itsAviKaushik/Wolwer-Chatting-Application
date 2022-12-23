const mongoose = require("mongoose");

const messages = new mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },
    messageType: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    messagedBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    messagedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Message", messages);
