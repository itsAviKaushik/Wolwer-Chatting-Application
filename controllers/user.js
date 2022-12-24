const ErrorHandler = require("../extras/ErrorHandlers");
const checkErrors = require("../middlewares/checkErrors");

exports.signup = checkErrors((req, res, next) => {
    const { userid, username, password } = req.body;

    next(new ErrorHandler(400, "Testing Error"));
});