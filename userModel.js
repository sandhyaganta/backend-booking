const mongoose=require("mongoose");
const schema=mongoose.Schema();
const users=new schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
   password:{
    type:String,
    require:true,

    },
    mobileno:{
        type:Number,
        require:true,
    },
    emailid:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },

},{
    timestamps:true
}
);
module.exports=mongoose.model("users",user)
