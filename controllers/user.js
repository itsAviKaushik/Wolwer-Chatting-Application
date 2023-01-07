const ErrorHandler = require("../src/ErrorHandlers");
const checkErrors = require("../middlewares/checkErrors");
const Users = require("../models/Users");

exports.signup = checkErrors(async (req, res, next) => {
    const { userid, username, password } = req.body;

    if (!userid && !username && !password) {
        next(new ErrorHandler(400, "Please enter valid Details!"));
    }

    const user = await Users.create({ userid, username, password });

    res.json({ success: true, message: "User created Successfully!" });
});