import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/node")
        console.log("Connection successfull")
    } catch (err) {
        console.log(err)
    }
}
dbConnect()

const template = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : String,
    page :Number,
    rating : Number
})

const nodebook = new mongoose.model("nodebook",template)

export {nodebook};