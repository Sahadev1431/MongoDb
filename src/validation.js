import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/validation")
        console.log("Connection successfull")
    } catch (err) {
        console.log(err)
    }
}
dbConnect()

const template = new mongoose.Schema({
    
    name : {
        type :String,
        required : true,
        unique : true,
        lowercase : true
    },
    college :String,
    course : {
        type : String,
        enum : ["mca","aiml","msccs"]
    },
    phone :Number,
    rating : Number
})

const collectionClg = new mongoose.model("CollectionClg",template)

const createData = async () => {
    try {
        let clg1 = new collectionClg({
            name : "SAhadev nai",
            college : "Rollwala",
            course : "mca",
            phone : 5424542,
            rating : 10
        })
        const result = await clg1.save()
        console.log(result)
    } catch (err) {
        console.log(err);
    }
}
createData()