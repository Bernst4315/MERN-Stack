require("dotenv").config()

const express = require("express");
const workoutRoutes = require("./routes/workouts")
const app = express(); //calls on express in ln 1


//Global Middleware

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use("/api/workouts", workoutRoutes)// this grabs all the routes in the workouts file and uses them

//listen for requests
//const port = 3000;
app.listen(process.env.PORT, () => {
    console.log("listening on port 3000")
})

process.env