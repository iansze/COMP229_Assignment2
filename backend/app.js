const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const userRouter = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://winco1125:axtv1fDZBzHnhepT@cluster0.dmsaq4j.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to Al");
  })
  .catch(() => {
    console.log("error");
  });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X_Requested-With, Content-Type, Accept, authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

app.use("/", userRouter);

module.exports = app;
