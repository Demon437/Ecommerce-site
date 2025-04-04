const mongoose=require("mongoose")
const schema=new mongoose.Schema({
         pid:Number,
         pname:String,
         pprice:Number,
         pdesc:String,
         pcat:String,
         pimage:String
})
module.exports=mongoose.model("products",schema)

