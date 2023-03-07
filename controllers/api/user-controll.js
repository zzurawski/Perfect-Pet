const { User } = require("../../models");
const router = require("express").Router();
// saves user info
router.post("/", async (req, res) => {
  try {
    const userVal = await User.create(req.body);
    req.session.save(() => {
      req.session.userId = userVal.id;
      req.session.email = userVal.email;
      req.session.logged_in = true;
      res.status(200).json({ message: "welcome to pet perfect" });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});
// finds and matches login info
router.post("/login", async (req, res) => {
  try {
    const userVal = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userVal) {
      res.status(400).json({ message: "wrong email or password" });
      return;
    }

    const password = userVal.checkPass(req.body.password);

    if (!password) {
      res.status(400).json({ message: "wrong email or password" });
      return;
    }
    req.session.save(() => {
      req.session.userId = userVal.id;
      (req.session.logged_in = true), res.json({ message: "welcome back" });
    });
  } catch (error) {
    res.status(400).json(error, { message: "something has gone wrong" });
  }
});
// logut user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
