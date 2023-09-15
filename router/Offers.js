const express = require("express");
const { getAllOffers } = require("../Controllers/Offers.controller");
const OffersRouter = express.Router();

OffersRouter.get("/", (request, response, next) => {
  return response.status(200).json({
    success: true,
    data: getAllOffers(),
    message: "Offers fetched successfully",
  });
});

module.exports = OffersRouter;
