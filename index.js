const express = require("express");
const API_SERVER = require("./app");
const WEB_SERVER = require("./web");
const EJS_ENGINE = require("ejs");

// CONSTANTS
const HTTP_SERVER = express();
const PORT = 5000;
const HOST = "0.0.0.0";

// INJECTING THE DEPENDENCIES
HTTP_SERVER.set("view engine", "ejs");

//localhost:5000/
HTTP_SERVER.use("/api", API_SERVER);
HTTP_SERVER.use("/", WEB_SERVER);

// CREATING A SERVER AND LISTENING TO THE PORT 5000
HTTP_SERVER.listen(PORT, HOST, () => {
  console.log(`Node Api Server Stated at ${PORT}`);
});
