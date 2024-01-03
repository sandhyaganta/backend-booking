
const express = require("express");

const mongoose = require("mongoose");

const adminRoute=require("./adminRoute")
const userRoute=require("./userRoute")

const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

PORT = 5000;

db_Url = "mongodb://localhost:27017/backend";

app.listen(PORT, () => {
  console.log("server start on port 5000");
});
mongoose
  .connect(db_Url)
  .then(console.log("db connected"))
  .catch((err) => {
    console.log("db not connected");
  });

  app.use("/admin",adminRoute)
  app.use("/user",userRoute)
