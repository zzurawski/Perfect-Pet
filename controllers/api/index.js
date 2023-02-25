const router = require("express").Router();
const userRoute = require("./user-controll");
const petRoute = require("./pet-control");
const commentRoute = require("./comment-control");
// const imageRoute = require("./image-control");

router.use("/user", userRoute);
router.use("/pet", petRoute);
router.use("/comment", commentRoute);
// router.use("/image", imageRoute);

module.exports = router;
