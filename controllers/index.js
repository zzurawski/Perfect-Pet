
const router = require("express").Router();

const mainroutes = require("./mainroutes");
const apiRoutes = require("./api/");

router.use("/", mainroutes);
router.use("/api", apiRoutes);

