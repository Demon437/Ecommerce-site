const mongoose=require("mongoose")
const rschema=new mongoose.Schema({
         uname:String,
         upass:String,
         uemail:String,
         umobile:String
})
module.exports=mongoose.model("register",rschema)