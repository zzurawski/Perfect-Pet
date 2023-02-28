const router = require("express").Router();
const userRoute = require("./user-controll");
const petRoute = require("./pet-control");
const commentRoute = require("./comment-control");


router.use("/user", userRoute);
router.use("/pet", petRoute);
router.use("/comment", commentRoute);


module.exports = router;
