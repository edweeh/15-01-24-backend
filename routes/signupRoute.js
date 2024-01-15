const app = require('express').Router()
const signupmodel = require("../model/Signup");

app.post('/dnew',(request,response)=>{
    new signupmodel(request.body).save();
    response.send("Record saved Sucessfully")
})


module.exports = app