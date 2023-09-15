const express = require("express");
const { getAllCategories } = require("./Controllers/Categories.controller");
const { getAllOffers } = require("./Controllers/Offers.controller");
const WebRouter = express.Router();

WebRouter.get("/", (req, res, next) => {
  res.render("pages/index", {
    pageName: "Swiggy",
    categories: getAllCategories(),
    offers: getAllOffers(),
  });
});

WebRouter.get("/about", (req, res, next) => {
  res.render("pages/about");
});

WebRouter.get("/restaurant", (req, res, next) => {
  res.render("pages/restaurant", {
    pageName: "Restaurant Details",
    restaurantName: "Anjappar",
  });
});

module.exports = WebRouter;
