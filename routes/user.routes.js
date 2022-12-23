const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.json("Success");
})

module.exports = router;