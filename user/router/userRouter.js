const express = require("express");
const route = express.Router();
const userdata = require("../model/userModel");
const bookingdata=require("../model/bookingModel");
const jwt = require("jsonwebtoken")
const verifytoken=require("../../jwt/token")


route.post("/create", (req, res) => {
  const ad = userdata(req.body);
  ad.save();
  res.status(201).json(ad);
});

route.post("/userlogin", async (req, res) => {
  const users = await userdata.findOne(req.body);
  const secretkey = 'my-secretkey';
  const token = jwt.sign({"username":req.body.username,"password":req.body.password},secretkey,{ expiresIn:'1h'})
  res.status(201).json({users,token}); 
});

route.get("/get/users", verifytoken ,async (req, res) => {
  const allusers = await userdata.find();
  res.status(201).json(allusers);
});

route.put("/updateById/:id", verifytoken ,async (req, res) => {
  const users = await userdata.findByIdAndUpdate(req.params.id, { $set:req.body},{ new:true });
  res.status(201).json(users);
});

route.get("/getById/:id", verifytoken, async(req,res)=>{
const user=await userdata.findById(req.params.id);
res.status(201).json(user);
});

route.post("/book",verifytoken, (req, res) => {
  const ad = bookingdata(req.body);
  ad.save();
  res.status(201).json(ad);
});

route.get("/get/book",verifytoken ,async (req, res) => {
  const allusers = await bookingdata.find();
  res.status(200).json(allusers);
});

route.put("/book/updateById/:id", verifytoken ,async(req,res)=>{
  console.log(req.params.id,'req.params.id');
  console.log(req.body,'req.body');
  const users=await bookingdata.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
  res.status(200).json(users);
});





module.exports = route;
