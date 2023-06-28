const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const userRouter = require("./routes/user");

mongoose
  .connect(
    "mongodb://testdw:KaVkJ8pY2xJ7kg3APtUG2fke6bsPnNrQzH3l3sti2Odzg4MUZ2PVjjJhBF7ITxrblXesEGkldH4LACDbpYuwIw%3D%3D@testdw.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@testdw@"
  )
  .then(() => {
    console.log("connected ");
  })
  .catch(() => {
    console.log("error");
  });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(__dirname + "./dist/COMP229_Assignment2"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X_Requested-With, Content-Type, Accept, authorization,X-Api-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );

  next();
});

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/COMP229_Assignment2/" })
);

app.use("/", userRouter);

module.exports = app;
