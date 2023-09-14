const express = require("express");
const WebRouter = express.Router();

WebRouter.get("/", (req, res, next) => {
  res.render("pages/index");
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
