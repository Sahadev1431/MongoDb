import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/student-apis")
        console.log("connetion successful")
    } catch (err) {
        console.log(err);
    }
}
export {connectDb}