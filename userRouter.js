const express=require("express");
const route=express.Router();
const userdata=require("/userModel");

route.post("/create",(req,res)=>{
    const ad=userdata(req.body);
    ad(save);
    res.status(201).json(ad);
});

route.get("/viewusers",async(req,res)=>{
    const users= await userdata.find();
    res.status(201).json(users);
});

route.delete("/userdelete/:id", async(req,res)=>{
    const users=await userdata.findByIdAndDelete(req.params.id);
    res.status(201).json(users);
});

route.put("/userupdate/:id",async(req,res)=>{
    const users=await userdata.findByIdAndUpdate(req.params.id,req.body);
    res.status(201).json(users);
});
module.exports=route;