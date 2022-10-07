const { Post } = require("../model");
const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
        user_id: req.session.user_id
    }
  })
    .then((results) => {
      const posts = results.map((p) => {
        return p.get();
      });
      res.render("dashboard", {
        loggedIn: req.session.loggedIn,
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
