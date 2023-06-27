const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", (req, res, next) => {
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

router.get("/register", (req, res) => {
  res.send(200, [{ id: 10, name: "Starlord", saying: "oh yeah" }]);
});

module.exports = router;
