const Workout = require("../models/workoutModels")
const mongoose = require("mongoose")

const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

const getWorkout = async (req,res) => {
    const {id} = req.params // or req.params.id
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no workout available"})
    } //give error for invalid id's

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "No workout found"})
    }

    res.status(200).json(workout);
}

const createWorkout = async (req,res) => {
    const {title, load, reps} = req.body;

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    
    if(emptyFields.length > 0){
        return res.status(400).json({error: "please fill in all fields", emptyFields})
    }

    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
        console.log(err)
    }

    res.json({mssg: "POST a new workout"})
}

const deleteWorkout = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no workout available"})
    } 

    const workout = await Workout.findByIdAndDelete({_id: id})

      if(!workout){
        return res.status(404).json({error: "No workout found"})
    }

    res.status(200).json(workout);
}

const editWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no workout available"})
    } 

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body //allows to to update any prop
    })

      if(!workout){
        return res.status(404).json({error: "No workout found"})
    }

    res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    editWorkout

}