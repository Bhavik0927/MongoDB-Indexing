import bcrypt from 'bcrypt';
import User from "../Models/user.model.js";
import asyncHandler from "express-async-handler";


export const create_user = asyncHandler(async (req,res) =>{
    const {username,email,password} = req.body;

    try {
        if(!username || !email || !password){
            res.status(400).json({message:"All fields are mandatory!"});
        }
    
        const hashPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({
            username,
            email,
            password: hashPassword
        })
    
        res.status(201).json({message:"User created successfully", user});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Server Error"});
    }

})