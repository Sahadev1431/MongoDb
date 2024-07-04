import { nodebook } from "./dbConnection.js";

const deleteDoc = async (id) => {
    const result = await nodebook.findOneAndDelete({_id : id})
    console.log(result);

}

deleteDoc("6686bc883ac3b3931d111c0e")