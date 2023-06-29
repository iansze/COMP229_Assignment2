const express = require("express");
const router = express.Router();
const User = require("../models/user");
const port = process.env.PORT || 3000;

router.post("/api/register", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User created!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/api/list", (req, res, next) => {
  User.find().then((doc) => {
    res.status(200).json({
      message: "sucess",
    });
  });
});

module.exports = router;
