const mongoose=require("mongoose")
const cschema=new mongoose.Schema({
         pid:Number,
         pname:String,
         pprice:Number,
         pimage:String
})
module.exports=mongoose.model("cart",cschema)