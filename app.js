const express = require("express");
const FoodRouter = require("./router/food");
const CategoriesRouter = require("./router/categories");
const OffersRouter = require("./router/Offers");

const API_SERVER = express();

// INJECT ALL THE DEPENDENCIES
API_SERVER.use("/food", FoodRouter);
API_SERVER.use("/categories", CategoriesRouter);
API_SERVER.use("/offers", OffersRouter);

// INJECT ALL THE ROUTERS HERE

module.exports = API_SERVER;
