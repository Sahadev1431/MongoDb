import mongoose from "mongoose";
import validator from "validator";

const studentTemplate = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        require : true
    },
    email : {
        require : true,
        type : String,
        unique :true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type :Number,        
        require : true
    },
    course : {
        type : String,
        enum : ["mca","aiml","mcscs"],
        require : true
    }
})

const Student = new mongoose.model("Student",studentTemplate)

export {Student}