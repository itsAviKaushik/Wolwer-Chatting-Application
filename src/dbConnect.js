const mongoose = require("mongoose");

async function dbConnect() {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}`);
        console.log("Database Connected!");
    } catch (error) {
        console.log("Error Connecting Database");
        console.log("Error Message :- ", error.message);
    }
}

module.exports = dbConnect