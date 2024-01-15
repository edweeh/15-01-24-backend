
const mongoose=require("mongoose")
let sc=mongoose.Schema;
const userSchema = new sc({
    Username: String,
    Password: String,
    
  });
  
  var loginmodel =mongoose.model("User",userSchema)
  module.exports =loginmodel;

