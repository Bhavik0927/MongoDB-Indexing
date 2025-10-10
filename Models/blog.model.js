
import mongoose from 'mongoose';

const blog_schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index: true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
        index: true
    },
    tags:[String],
    createdAt:{
        type:Date,
        default: Date.now,
        index: true
    }
},{timestamps:true});

const blog = mongoose.model("blog", blog_schema);

export default blog;