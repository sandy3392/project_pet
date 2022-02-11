const { Pet } = require("../models");

const petData = [
  {
    pet_name: "Joey",
    pet_age: "4",
    pet_breed: "husky",
    pet_desc: " A loving fur ball with over active tendacies.",
    user_id: 1,
  },
  {
    pet_name: "Luna",
    pet_age: "8",
    pet_breed: "golden retriever",
    pet_desc: " test description",
    user_id: 2,
  },
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;