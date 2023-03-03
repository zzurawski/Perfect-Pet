const router = require("express").Router();
const userRoute = require("./user-controll");
const petRoute = require("./pet-control");



router.use("/user", userRoute);
router.use("/pet", petRoute);


module.exports = router;
