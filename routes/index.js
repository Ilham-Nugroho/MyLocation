const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", { api_key: process.env.MAP_API });
});

module.exports = router;
