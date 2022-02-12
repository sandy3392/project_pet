const router = require("express").Router();
const { User, Post, Pet } = require("../models");

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
      res.json(profileData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
