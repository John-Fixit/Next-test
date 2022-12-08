import mongoose from "mongoose";
let URI = process.env.MONGO_URI
const connection = async()=>{
    await mongoose.connect(URI, (err)=>{
        if(err){
            console.log("error occurred");
        }
        else{
            console.log("mongoose connected");
        }
    })
}

export default connection