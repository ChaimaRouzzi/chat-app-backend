const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./routes/auth");
const app = express();
const Port = process.env.app || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(Port, () => {
  console.log(`leasning on port ${Port}`);
});
