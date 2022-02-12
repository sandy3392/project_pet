const router = require("express").Router();
const { Pet } = require("../../models");

// Route to Create Pet
router.post("/", (req, res) => {
  Pet.create({
    pet_name: req.body.petName,
    pet_age: req.body.petAge,
    pet_breed: req.body.petBreed,
    pet_desc: req.body.petDesc,
    user_id: req.body.userId,
  })
    .then((petDbData) => {
      res.json(petDbData);
    })
    .catch((err) => {
      console.log(err), res.json(err);
    });
});

// Route to Update Pet
router.put("/:id", (req, res) => {
  Pet.update({
    where: {
      id: req.body.id,
    },
  })
    .then((petDbData) => {
      if (!petDbData) {
        res.status(404).json({ message: "Not a valid Pet" });
        return;
      }
      res.json(petDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Route to Delete Pet
router.delete("/:id", (req, res) => {
  Pet.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((petDbData) => {
      if (!petDbData) {
        res.status(404).json({ message: "Not a valid Pet" });
        return;
      }
      res.json(petDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
