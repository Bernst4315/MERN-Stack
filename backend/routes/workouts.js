const express = require("express");
const { 
    getWorkout, 
    getWorkouts, 
    createWorkout, 
    deleteWorkout, 
    editWorkout 
} = require("../controllers/workoutControllers")

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts)

// GET single workout
router.get("/:id", getWorkout)

// POST a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// UPDATE a workout
router.patch("/:id", editWorkout)

module.exports = router; 