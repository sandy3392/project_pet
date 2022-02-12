const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello pets");
});

module.exports = router;
