const express = require("express");
const cors = require("cors")
const signupRouter = require('./routes/signupRoute')
const loginRouter = require('./routes/loginRoute')
const db = require("./Connection/Database")


const app = new express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());




app.get('/', (request, response) => {
    response.send("hi database")
})

app.use("/signup", signupRouter)

app.use("/login", loginRouter)




app.listen(4000, (request, response) => {
    console.log("Port is running in 3000")
})