 require("dotenv").config()

const express = require("express");
const workoutRoutes = require("./routes/workouts")
const mongoose = require("mongoose");

const app = express(); //calls on express in ln 1


//Global Middleware

app.use(express.json()); //looks for data being sent to server and attaches it to req obj

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use("/api/workouts", workoutRoutes)// this grabs all the routes in the workouts file and uses them

//connect to db

mongoose.connect(process.env.MONGO_URL)
    .then(() => {

        //listen for requests
//const port = 3000;
app.listen(process.env.PORT, () => {
    console.log("listening on port 3000")
})

    })
    .catch((error) =>{
        console.log(error)
    }) 


process.env