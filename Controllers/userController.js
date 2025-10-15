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


export const login_user = asyncHandler(async (req,res) =>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).json({message:"All fields are mandatory..!!"})
        }

        const user = await User.findOne({email}).select('+password');
        if(!user){
            res.status(400).json({message:"User does not exist..!!"})
        }

        const isPassword = await bcrypt.compare(password, user?.password);
        if(!isPassword){
            res.status(400).json({message:"Invalid credentials..!!"})
        }

        res.status(200).json({message:"User logged in successfully", user});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

