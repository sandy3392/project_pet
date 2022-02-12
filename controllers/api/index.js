const router = require("express").Router();

const petRoutes = require("./pet-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/pet", petRoutes);
router.use("/post", postRoutes);

module.exports = router;
