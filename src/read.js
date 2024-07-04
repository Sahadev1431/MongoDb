import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/node")
        console.log("Connection successful")
    } catch (err) {
        console.log(err);
    }
}
dbConnect()

const template = new mongoose.Schema({
title: String,
author: String,
// pages: Number,
// rating: Number
})
const nodebooks = new mongoose.model("nodebooks",template)

const getReadDoc = async () => {
    const result = await nodebooks.find()
    console.log(result)
}

// getReadDoc()

const greterThan43 = async () => {
    const result = await nodebooks.find({"pages" : {$gt : 43}})
    console.log(result)
}

// greterThan43()

const sahdevAndJatin = async () => {
    const result = await nodebooks.find({$and : {author : ["sahadev","jatin"]}})
    console.log(result)
}

// sahdevAndJatin()

const sahdevAndGautam = async () => {
    const result = await nodebooks.find({author : {$in : ["sahadev","gautam"]}})
    console.log(result)
}
// sahdevAndGautam()