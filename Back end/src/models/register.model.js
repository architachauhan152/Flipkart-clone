const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
   
    mbl:{type:String,unique:true},
    pass:{type:String}
},
{
versionKey:false,
timeStamps:true,
})
const registerdata=mongoose.model("register",registerSchema);
module.exports=registerdata;