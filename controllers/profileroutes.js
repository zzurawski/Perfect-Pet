const router = require("express").Router();
const { Pet, User, Image } = require("../models");

router.get("/", async (req, res) => {
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
    });
  } catch (error) {
    res.statusCode(500).json(error);
  }
});
