const express = require("express");

const mongoose = require("mongoose");

const adminRoute = require("././admin/routes/adminRouter");
const userRoute = require("././user/router/userRouter");
const addflightRoute = require("./admin/routes/addflightRouter");


const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

let corsOptions = {
  origin: ["http://localhost:5000"],
};

PORT = 5000;

db_Url = "mongodb://localhost:27017/backend";

mongoose
  .connect(db_Url)
  .then(console.log("db connected"))
  .catch((err) => {
    console.log("db not connected");
  });

app.use("/admin", cors(corsOptions), adminRoute);
app.use("/user", userRoute);
app.use("/flight", addflightRoute);


app.listen(PORT, () => {
  console.log("server start on port 5000");
});
