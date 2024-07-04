import { nodebook } from "./dbConnection.js";

const updateTitleTemp = async (_id) => {
    const result = await nodebook.updateOne({_id},  //this is object destructuring _id : id
        { 
            $set : {title : "updatedTemp"}
        }
    )
    console.log(result);
}    
// updateTitleTemp("6686982d080ce772506da7a1")
// this method will update but in output it will  show as below
// Output : 
// Connection successfull
// {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }



const updateTitleTemp2 = async (id) => {
    const result = await nodebook.findOneAndUpdate({_id : id},
        {
            $set : {title : "updatedTemp"}
        }
    )
    console.log(result);
}

updateTitleTemp2("6686982d080ce772506da7a1")