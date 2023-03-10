const router = require("express").Router();
const { Pet, User, Image } = require("../models");
// gets all created pets
router.get("/pets", async (req, res) => {
  try {
    const petsData = await Pet.findAll({
      include: [User, { model: Image }],
    });
    const pets = petsData.map((pets) => pets.get({ plain: true }));
    res.render("pets", { pets, logged_in: req.session.logged_in });
  } catch (error) {
    req.status(500).json(error);
  }
});
// gets pets for home page, limit 4
router.get("/", async (req, res) => {
  try {
    const petsData = await Pet.findAll({
      include: [User, { model: Image }],
      limit: 4,
    });

    console.log(petsData);
    const pets = petsData.map((pets) => pets.get({ plain: true }));
    console.log("++++++pets now +++++++++");
    console.log(pets);
    res.render("homepage", { pets, logged_in: req.session.logged_in });
  } catch (error) {
    req.status(500).json(error);
  }
});
// gets single pet
router.get("/singlepet/:id", async (req, res) => {
  try {
    const petsData = await Pet.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Image,
        },
      ],
    });
    if (petsData) {
      const pet = petsData.get({ plain: true });
      res.render("selectedpet", {
        pet,
        logged_in: req.session.logged_in,
      });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// renders login page
router.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("loginpage");
});

module.exports = router;
