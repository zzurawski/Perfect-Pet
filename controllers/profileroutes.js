// renders profile routes
const router = require("express").Router();
const { Pet, User, Image } = require("../models");
const logAuth = require("../utils/auth");
// gets your pets that you have posted with your user ID
router.get("/", logAuth, async (req, res) => {
  try {
    const petInfo = await Pet.findAll({
      include: [User, Image],
      where: {
        userId: req.session.userId,
      },
    });
    const pets = petInfo.map((pet) => pet.get({ plain: true }));
    res.render("yourpets", {
      layout: "profile",
      pets,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
// renders new pet
router.get("/newpet", logAuth, (req, res) => {
  res.render("newpet", {
    layout: "profile",
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
