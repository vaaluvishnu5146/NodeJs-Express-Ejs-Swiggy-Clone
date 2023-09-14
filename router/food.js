const express = require("express");
const FoodRouter = express.Router();

FoodRouter.get("/", (request, response, next) => {
  console.log("Food Get Request Hits");
  response.status(200).json({
    success: true,
    message: "Food Api is working",
  });
});

module.exports = FoodRouter;
