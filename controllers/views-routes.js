const router = require("express").Router();
const { User, Post, Pet } = require("../models");

//Get login page
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((userDbData) => {
    if (!userDbData) {
      res.status(404).json({ message: "No user found" });
      return;
    }

    const passwordAuth = userDbData.checkPassword(req.body.password);

    if (!passwordAuth) {
      res.status(400).json({ message: "Incorrect Password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userDbData.id;
      req.session.username = userDbData.username;
      req.session.loggedIn = true;

      res.render("homepage");
    });
  });
});

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
