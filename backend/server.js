const express = require("express");
const app = express(); //calls on express in ln 1

//listen for requests
const port = 3000;
app.listen(port, () => {
    console.log("Hello")
})