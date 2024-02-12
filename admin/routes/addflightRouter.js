const express = require("express");
const route = express.Router();
const flightData = require("./../models/addflightModel");
const { json } = require("body-parser");
const multer = require("multer");
const verifytoken = require("../../jwt/token");

const storage = multer.diskStorage({
  destination: "photos/",
  filename: (req, file, res) => {
    res(null, Date.now() + "-" + file.originalname);
  },
});

const uploads = multer({ storage });

let corsOptions = {
  origin: ["http://localhost:5000"],
};
route.post("/create", uploads.single("flightimg"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "nofile" });
  }
  var data = {
    flightnumber: req.body.flightnumber,
    flightname: req.body.flightname,
    flightimg: req.file.filename,
  };
  try {
    const images = await flightData.create(data);
    return res.status(200).json(images);
  } catch (err) {
    return res.status(500).json({ err });
  }
});

route.post("/creates", (req, res) => {
  const ad = new flightData(req.body);
  ad.save();
  res.status(201).json(ad);
});
route.get("/get/flight", verifytoken, async (req, res) => {
  const allusers = await flightData.find();
  res.status(201).json(allusers);
});
route.delete("/deleteById/:id", verifytoken, async (req, res) => {
  const users = await flightData.findByIdAndDelete(req.params.id);
  res.status(201).json(users);
});

route.put("/updateById/:id", verifytoken, async (req, res) => {
  const users = await flightData.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(201).json(users);
});
// route.get("/getById/:id", verifytoken, async (req, res) => {
//   const user = await flightData.findById(req.params.id);
//   res.status(200).json(user);
// });

route.get("/getById/:id", async(req,res)=>{
  const user=await flightData.findById(req.params.id);
  res.status(201).json(user);
  });
module.exports = route;
