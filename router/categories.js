const express = require("express");
const { getAllCategories } = require("../Controllers/Categories.controller");
const CategoriesRouter = express.Router();

CategoriesRouter.get("/", (request, response, next) => {
  return response.status(200).json({
    success: true,
    data: getAllCategories(),
    message: "Categories fetched successfully",
  });
});

module.exports = CategoriesRouter;
