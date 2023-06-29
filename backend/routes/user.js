const express = require("express");
const router = express.Router();
const User = require("../models/user");
const port = process.env.PORT || 3000;

router.post("/api/register", (req, res, next) => {
  console.log(port);
});

router.get("process.env.PORT", (req, res, next) => {
  User.find().then((doc) => {
    res.status(200).json({
      message: "sucess",
      users: doc,
    });
  });
});

module.exports = router;
