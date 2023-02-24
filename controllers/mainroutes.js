const router = require("express").Router();
const { Pet, Comment, User, Image } = require("../models");

router.get("/pets", async (req, res) => {
  try {
    const petsData = await Pet.findAll({
      include: [User, { model: Image }],
    });
    const pets = petsData.map((pets) => pets.get({ plain: true }));
    res.render("pets", { pets, logged_in: req.session.logged_in });
  } catch (error) {
    req.statusCode(500).json(error);
  }
});

router.get("/", async (req, res) => {
 try {
    const petsData = await Pet.findAll({
      include: [User, { model: Image }],
    });
    const pets = petsData.map((pets) => pets.get({ plain: true }));
    res.render("homepage", { pets, logged_in: req.session.logged_in });
  } catch (error) {
    req.statusCode(500).json(error);
  }
});

router.get("/singlepet/:id", async (req, res) => {
  try {
    const petsData = await Pet.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (petsData) {
      const pet = petsData.get({ plain: true });
      res.render("selectedpet", {
        pet,
        canManip: req.session.userId === pet.userId,
      });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("loginpage");
});

module.exports = router;
