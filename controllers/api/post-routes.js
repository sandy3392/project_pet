const router = require("express").Router();
const { User, Post } = require("../../models");

//Route to get all post
router.get("/", (req, res) => {
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
      res.json(postdata);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Route to create Post
router.post("/", (req, res) => {
  Post.create({
    post_desc: req.body.postDesc,
    pet_id: req.body.petId,
    user_id: req.body.userId,
  })
    .then((postDbData) => {
      res.json(postDbData);
    })
    .catch((err) => {
      console.log(err), res.json(err);
    });
});

//Route to update Post
router.put("/:id", (req, res) => {
  console.log("id", req.params.id);
  Post.update(
    {
      post_desc: req.body.post_desc,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((postDbData) => {
      if (!postDbData) {
        res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(postDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Route to delete Post
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((postDbData) => {
      if (!postDbData) {
        res.status(404).json({ message: "Post not found" });
      }
      res.json(postDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
