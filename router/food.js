const express = require("express");
const { client, dbName } = require("../db");
const { ObjectId } = require("mongodb");
const FoodRouter = express.Router();

FoodRouter.get("/", (request, response, next) => {
  // CREATING CLIENT CONNECTION
  client.connect();

  // CREATED THE INSTANCE OF THE DATABASE
  const db = client.db(dbName);

  // SELECT THE COLLECTION
  const FoodCollection = db.collection("foods");

  // QUERY AND GET THE DATA
  FoodCollection.find()
    .toArray()
    .then((result) => {
      if (result && result.length > 0) {
        // CLOSING CLIENT CONNECTION
        client.close();
        return response.status(200).json({
          success: true,
          data: result,
          message: "Foods Fetched!",
        });
      }
    })
    .catch((error) => {
      // CLOSING CLIENT CONNECTION
      client.close();
      response.status(400).json({
        success: false,
        error: error,
        message: "Something went wrong",
      });
    });
});

FoodRouter.get("/:id", async (request, response, next) => {
  console.log("HIT");
  const { params } = request;
  const { id } = params;

  // HANDLING IN VALID OBJECT ID
  if (id === "null" || id === "undefined" || id.length != 24) {
    return response.status(400).json({
      success: false,
      message: "Object Id is In Valid",
    });
  } else {
    // CREATING CLIENT CONNECTION
    client.connect();

    // CREATED THE INSTANCE OF THE DATABASE
    const db = client.db(dbName);

    // SELECT THE COLLECTION
    const FoodCollection = db.collection("foods");
    // QUERY AND GET THE DATA
    FoodCollection.find({ _id: new ObjectId(id) })
      .toArray()
      .then((result) => {
        // CLOSING CLIENT CONNECTION
        client.close();
        if (result && result.length > 0) {
          return response.status(200).json({
            message: "Food Fetched Successfully!!",
            data: result,
          });
        } else {
          return response.status(200).json({
            message: "No Food Found!!",
            data: result,
          });
        }
      })
      .catch((error) => {
        // CLOSING CLIENT CONNECTION
        client.close();
        return response.status(400).json({
          success: false,
          error: error.message,
        });
      });
  }
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
