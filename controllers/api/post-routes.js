const router = require("express").Router();
const { User, Post } = require("../../models");

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
  Post.update({
    // what are you tring to update here using this id ? 
    //add post_desc to be added from the req.body
    where: {
      id: req.body.id,
    },
  })
    .then((postDbData) => {
      if (!postDbData) {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Route to delete Post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((postDbData) => {
      if (!postDbData) {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
