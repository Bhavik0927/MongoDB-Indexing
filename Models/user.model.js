
import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },   
    email:{
        type: String,
        unique: true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
},{timestamps:true});

const User = mongoose.model("User", user_schema);

export default User;

