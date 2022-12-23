// Required Imports.
const express = require("express");

// Initialising the Application.
const app = express();

// Setting up pre-middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up the routes.

module.exports = app;