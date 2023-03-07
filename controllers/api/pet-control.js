const router = require("express").Router();
const { Pet, Image } = require("../../models");
const logAuth = require("../../utils/auth");
const upload = require("../../utils/upload");
const fs = require("fs");
// creates pet
router.post("/", logAuth, upload.single("file"), async (req, res) => {
  if (req.file == undefined) {
    return res.send(`You must select a file.`);
  }
  try {
    const petInfo = await Pet.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      description: req.body.description,
      userId: req.session.userId,
    });
    if (!petInfo) {
      res.status(400).json({ message: "failed to create" });
    }
// creates image
    const image = await Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __dirname +
          "/../../resources/static/assets/uploads/" +
          req.file.filename,
        { encoding: "base64" }
      ),
      petId: petInfo.id,
    });
    fs.unlinkSync(
      __dirname + "/../../resources/static/assets/uploads/" + req.file.filename
    );
    res.status(200).json(petInfo);
  } catch (error) {
    res.status(500).json(error, { message: "something went wrong" });
  }
});
// deletes pet
router.delete("/:id", logAuth, async (req, res) => {
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
