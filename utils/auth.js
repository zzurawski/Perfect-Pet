const logAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = logAuth;

// if not logged in send to diffrent page
