import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String, required:true},
    profile:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}

})
export default mongoose.model.Users||mongoose.model("Users",userSchema)
