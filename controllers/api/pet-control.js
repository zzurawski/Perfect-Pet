const router = require("express").Router();
const { Pet } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const petInfo = await Pet.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      userId: req.session.userId,
    });
    if (!petInfo) {
      res.status(400).json({ message: "failed to create" });
    }
    res.status(200).json(petInfo);
  } catch (error) {
    res.status(500).json(error, { message: "something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const petInfo = await Pet.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });
    if (!petInfo) {
      res.status(404).json({ message: "could not delete" });
    }
  } catch (error) {
    res.status(500).json(error, { message: "could not delete pet" });
  }
});

module.exports = router;
