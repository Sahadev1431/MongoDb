import { nodebook } from "./dbConnection.js";

const sahdev266Count = async () => {
    const result = await nodebook.find({$or : [{author : "sahadev"},{author:"jatin"}]}).countDocuments()
    console.log(result);
}

// sahdev266Count()

const sahdev266CountSort = async () => {
    const result = await nodebook.find({$or : [{author : "sahadev"},{author:"jatin"}]}).sort({pages : -1})
    console.log(result);
}
sahdev266CountSort()