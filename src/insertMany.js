import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/node")
        console.log("Connection successful")
    } catch (err) {
        console.log(err);
    }
}


const template = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    rating: Number
})

const nodebook = new mongoose.model("nodebook", template)

const addDoc = async () => {
    try {
        const nodeBook1 = new nodebook({
            title: "nodebook1",
            author: "sahadev",
            pages: 45,
            rating: 10
        })
        const nodeBook2 = new nodebook({
            title: "nodebook2",
            author: "gautam",
            pages: 42,
            rating: 8
        })
        const nodeBook3 = new nodebook({
            title: "nodebook3",
            author: "jatin",
            pages: 7,
            rating: 9
        })

        const result = await nodebook.insertMany([nodeBook1,nodeBook2,nodeBook3])
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

dbConnect().then(addDoc)
