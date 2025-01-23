require("dotenv").config()

const express = require("express");
const app = express(); //calls on express in ln 1


//Global Middleware

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.get("/", (req,res) => {
    res.json({mssg: "welcome to app"});
})

//listen for requests
//const port = 3000;
app.listen(process.env.PORT, () => {
    console.log("listening on port 3000")
})

process.env