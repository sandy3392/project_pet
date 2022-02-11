const { User } = require("../models");

const userData = [
  {
    username: "jf",
    email: "jf@goldenbough.edu",
    password: "password123",
  },
  {
    username: "london",
    email: "jlondon@ualaska.edu",
    password: "password123",
  },
//   {
//     username: "bruce",
//     email: "rbruce@scotland.net",
//     password: "password123",
//   },
//   {
//     username: "greenaway",
//     email: "pgreenaway@postmodern.com",
//     password: "password123",
//   },
//   {
//     username: "williams",
//     email: "hwilliams@bafta.com",
//     password: "password123",
//   },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;