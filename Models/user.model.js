
import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        trim:true,
        minlength:[2, "Name must be at least 2 characters"]
    },   
    email:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    age:{
        type:Number,
        min:0,
        max:120
    },
    city:{
        type:String,
        trim:true
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default: "user"
    },
    isActive:{
        type:Boolean,
        default: true
    },
    createdAt:{
        type:Date,
        default:Date.now

    }
},{timestamps:true});

const Users = mongoose.model("Users", user_schema);

export default Users;

