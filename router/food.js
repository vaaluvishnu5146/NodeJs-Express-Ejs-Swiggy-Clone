const express = require("express");
const FoodRouter = express.Router();

FoodRouter.get("/", (request, response, next) => {
  console.log("Food Get Request Hits");
  response.status(200).json({
    success: true,
    message: "Food Api is working",
  });
});

FoodRouter.post("/create", (request, response, next) => {
  console.log("Food Post Request Hits");
  response.status(200).json({
    success: true,
    message: "Post Food Api is working",
  });
});

FoodRouter.put("/update", (request, response, next) => {
  console.log("Food Update Request Hits");
  response.status(200).json({
    success: true,
    message: "Update Food Api is working",
  });
});

FoodRouter.delete("/:id", (request, response, next) => {
  const { params, query } = request;
  console.log("Request params", params, query);
  console.log("Food Delete Request Hits");
  response.status(200).json({
    success: true,
    message: "Delete Food Api is working",
  });
});
module.exports = FoodRouter;
