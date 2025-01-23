const express = require("express");
const app = express(); //calls on express in ln 1

// routes
app.get("/", (req,res) => {
    res.json({mssg: "welcome to app"})
})

//listen for requests
const port = 3000;
app.listen(port, () => {
    console.log("listening on port 3000")
})

process.env