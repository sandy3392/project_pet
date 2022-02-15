const router = require("express").Router();
const { User, Post, Pet } = require("../models");

//Get all users
router.get("/profile/", (req, res) => {
  User.findAll({
    exclude: ["password"],
  })
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Route to get back a User profile

router.get("/profile/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["profile_name", "profile_bio"],
    include: [
      {
        model: Post,
        attributes: ["post_desc"],
      },
      {
        model: Pet,
        attributes: ["pet_name", "pet_age", "pet_breed", "pet_desc"],
      },
    ],
  })
    .then((profileData) => {
      const post = profileData.map((post) => {
        post.get({ plain: true });
      });
      res.render("profile", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Route to get all Post and render to home page
router.get("/dashboard", (req, res) => {
  Post.findAll({
    attributes: ["post_desc"],
    include: [
      {
        model: User,
        attributes: ["profile_name"],
      },
    ],
  })
    .then((postdata) => {
      const post = postdata.map((post) => {
        post.get({ plain: true });
      });
      res.render("homepage", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Route to get single Post
router.get("/dashboard/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["post_desc"],
    include: [
      {
        model: User,
        attributes: ["profile_name"],
      },
    ],
  })
    .then((singlePostData) => {
      res.json(singlePostData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
