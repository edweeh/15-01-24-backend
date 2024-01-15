const app = require('express').Router()
const loginmodel = require('../model/Login');

app.post('/dnew',(request,response)=>{
    new loginmodel(request.body).save();
    response.send("Record saved Sucessfully")
})


module.exports = app