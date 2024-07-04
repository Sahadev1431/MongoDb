import { nodebook } from "./dbConnection.js";
// dbConnect()
const sahadev266 = async () => {
    const result = await nodebook.find({$and : [{author :  "sahadev"},{pages : 45}]})
    console.log(result);
}

// sahadev266()

const sahadevOrPAge7 = async () => {
    const result = await nodebook.find({$or : [{author : "Sahdev"},{pages : 7}]})
    console.log(result);
}

sahadevOrPAge7()