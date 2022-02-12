const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello Post");
});

module.exports = router;
