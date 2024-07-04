import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/node")
        console.log("connection successful");
    } catch (err) {
        console.log(err);
    }
}

dbConnect()

let connection = mongoose.connection

const newDoc = {
    title : "temp",
    author : "Sahdev",
    page :266,
    rating : 10
    }

const addDoc = async () => {
    const result = await connection.collection('nodebooks').insertOne(newDoc)
    console.log(result);

}

const readDoc = async () => {
    const result = await connection.collection('nodebooks').find()
    console.log(result);
}

addDoc()
readDoc()
