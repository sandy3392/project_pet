const router = require("express").Router();
const { User } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to Create User
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profile_name: req.body.profileName,
    profile_bio: req.body.profileBio,
  })
    .then((userDbData) => {
      res.json(userDbData);
    })
    .catch((err) => {
      console.log(err), res.json(err);
    });
});

router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((userDbData) => {
      if (!userDbData) {
        res.status(404).json({ message: "Not a valid User" });
        return;
      }
      res.json(userDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// do we need delete user?
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((userDbData) => {
      if (!userDbData) {
        res.status(404).json({ message: "Not a valid User" });
        return;
      }
      res.json(userDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
