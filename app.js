// Required Imports.
const express = require("express");
const handleErrors= require("./middlewares/handleErrors");

// Initialising the Application.
const app = express();

// Setting up pre-middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up the routes.
app.use("/api/user", require("./routes/user"));

// Setting up post-middlewares.
app.use(handleErrors);

module.exports = app;