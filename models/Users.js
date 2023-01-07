const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    avatar: {
        name: {
            type: String
        },
        dateAdded: {
            type: Date
        }
    },
    password: {
        type: String,
        required: true
    },
    lastSeen: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});

users.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

module.exports = mongoose.model("User", users);