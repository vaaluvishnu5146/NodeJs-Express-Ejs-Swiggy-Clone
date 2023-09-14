const express = require("express");
const FoodRouter = require("./router/food");

const API_SERVER = express();

// INJECT ALL THE DEPENDENCIES
API_SERVER.use("/food", FoodRouter);

// INJECT ALL THE ROUTERS HERE

module.exports = API_SERVER;
