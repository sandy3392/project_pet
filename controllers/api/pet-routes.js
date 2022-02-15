const router = require("express").Router();
const { Pet } = require("../../models");

//Route to get all pets
router.get("/", (req, res) => {
  Pet.findAll({
    attributes: ["pet_name", "pet_age", "pet_breed", "pet_desc"],
  })
    .then((dbPetData) => {
      res.json(dbPetData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
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
  Pet.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((petDbData) => {
      console.log(petDbData);
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
  console.log("id", req.params.id);
  Pet.destroy({
    where: {
      id: req.params.id,
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
