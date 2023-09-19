const express = require("express");
const API_SERVER = require("./app");
const WEB_SERVER = require("./web");
const BODY_PARSER = require("body-parser");
const CORS = require("cors");

// INJECTING DATABASE
require("./db");

// CONSTANTS
const HTTP_SERVER = express();
const PORT = 5000;
const HOST = "0.0.0.0";

// INJECTING THE DEPENDENCIES
HTTP_SERVER.set("view engine", "ejs");

// INJECTING CORS
HTTP_SERVER.use(
  CORS({
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"],
    methods: ["PUT", "POST"],
  })
);

// PARSER THE REQUEST AS application/json
HTTP_SERVER.use(BODY_PARSER.json());

// PARSER THE REQUEST AS application/x-www-form-urlencoded
HTTP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }));

//localhost:5000/
HTTP_SERVER.use("/api", API_SERVER);
HTTP_SERVER.use("/", WEB_SERVER);

// CREATING A SERVER AND LISTENING TO THE PORT 5000
HTTP_SERVER.listen(PORT, HOST, () => {
  console.log(`Node Api Server Stated at ${PORT}`);
});
