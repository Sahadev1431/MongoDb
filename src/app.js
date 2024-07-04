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

const funcAddDoc = async () => {
    try {
        const doc1 = new nodebook({
        title : "document 1",
        author : "Sahdev",
        page :266,
        rating : 10
        })

        const result = await doc1.save()
        console.log(result);

        result.rating = 8
        const updatedResult = await result.save()
        console.log("updated\n",updatedResult)
    } catch (err) {
        console.log(err);
    }
}

funcAddDoc()
