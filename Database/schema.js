import mongoose from "mongoose";

let firstSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

let userModel = mongoose.models.user_tb || mongoose.model('user_tb', firstSchema)

export {userModel}