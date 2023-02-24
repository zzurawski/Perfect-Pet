const router = require("express").Router();
const { Comment } = require("../../models");
const { route } = require("./pet-control");

router.post("/", async (req, res) => {
  try {
    const commentInfo = await Comment.create({
      body: req.body.body,
      petId: req.body.petId,
      userId: req.session.userId,
    });
    if (!commentInfo) {
      res.status(404).json({ message: "comment has not been created" });
    }
    res.status(200).json(commentInfo);
  } catch (error) {
    res.status(500).json(error, { message: "something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const commentInfo = await Comment.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!commentInfo) {
      res.status(404).json({ message: "could not delete" });
    }
  } catch (error) {
    req.status(500).json(error, { message: "could not delete" });
  }
});
module.exports = router;
