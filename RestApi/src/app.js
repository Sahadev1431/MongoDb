import express from 'express'
import {connectDb} from '../db/connection.js'
import { Student } from '../db/Student.js'
const app = express()
const port = process.env.PORT || 3000

connectDb()
app.use(express.json())
// app.get("/",(req,res) => {
//     res.json({connction : "true"})
// })

app.get("/student", async (req,res) => {
    try {
        const result = await Student.find()
        console.log(result);
        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

//PERTICULAR STUDEENT

app.get("/student/:name", async (req,res) => {
    try {
        const result = await Student.find({name : req.params.name})
        console.log(result);
        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

app.post("/student", async (req,res) => {
    try {
        const newStudent = new Student(req.body)
        const result = await newStudent.save()
        console.log("new student updated successfully");
        res.status(200).send(result)

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

app.delete("/student/:name", async (req,res) => {
    try {
        const result = await Student.findOneAndDelete({name : req.params.name})
        console.log(result);
        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

app.patch("/student/:id", async (req,res) => {
    try {
        const result = await Student.findOneAndUpdate({_id : req.params.id},req.body,{new : true})
        console.log(result);
        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
})

app.listen(port,() => {
    console.log(`listening at port ${port}`);
})