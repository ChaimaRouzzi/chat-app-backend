const express = require("express");
const route = express.Router();
const { login, signup } = require("../controllers/auth");
route.post("/signin", login);

route.post("/signup", signup);

module.exports = route;
