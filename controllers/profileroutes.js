const router = require("express").Router();
const { Pet, User, Image } = require("../models");

router.get("/", async (req, res) => {
  try {
    const petInfo = await Pet.findAll({
      include: [User, Image],
      // where: {
      //   userId: req.session.userId,
      // },
    });
    const pets = petInfo.map((pet) => pet.get({ plain: true }));
    res.render("yourpets", {
      layout: "profile",
      pets,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/newpet", (req, res) => {
  res.render("newpet", {
    layout: "profile",
  });
});

module.exports = router;
