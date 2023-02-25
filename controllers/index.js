
const router = require("express").Router();

const mainroutes = require("./mainroutes");
const apiRoutes = require("./api/");
const profileRoutes = require("./profileroutes")

router.use("/", mainroutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);

module.exports = router