const { signup } = require("../controllers/user");

const router = require("express").Router();

router.post("/signup", signup);

module.exports = router;