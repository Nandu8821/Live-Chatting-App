import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";



export const register = async (req,res)=>{
   try{
    const {fullName , username,password,confirmPassword,gender} = req.body;
    if(!fullName || !username || !password  || !confirmPassword || !gender){
       return res.status(400).json({msg:"Please enter all fields"})
    }
    if(password !== confirmPassword){
        return res.status(400).json({msg:"Passwords do not match"})
    }

    const user = await User.findOne({username});
    if(user){
        return res.status(400).json({msg:"User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password,10);
    // profilePhoto
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`
    await User.create({
        fullName,
        username,
        password : hashedPassword,
        profilePhoto : gender === "male" ?  maleProfilePhoto :femaleProfilePhoto,
        confirmPassword,
        gender,
    })
    return res.status(201).json({msg:"User created successfully"})
   }catch (error){
console.log(error)
   }
}

export const login = async (req, res) => {
    try{
        const {username,password} = req.body;

        if(!username || !password){
        return res.status(400).json({msg:"Please enter all fields"})
        }

        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({msg:"User does not exist",success : false})
        }

        const ispasswordMatch = await bcrypt.compare(password, user.password);
        if(!ispasswordMatch){
            return res.status(400).json({msg:"Invalid Username or Password",success :false})
        };

        const tokenData = {
            userId:user._id,
        };
       const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'})

         return res.status(200).cookie("token",token,{maxAge : 1*24*60*60*1000 ,httpOnly : true,sameSite:"strict"}).json({
            _id:user._id,
            username:user.username,
            fullName:user.fullName,
            profilePhoto:user.profilePhoto,
            gender:user.gender,
            success:true,
         })
         
    }catch(error){
        console.log(error)
    }
}


export const logout =  (req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"user logged out successfully."
        })
         

    }catch(error){
        console.log(error)
    }
}


export const getOtherUsers = async (req,res)=>{
    try{ 
   
const loggedInUser= req.id;
const otherUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password")
return res.status(200).json(otherUsers)
    }catch(error){
        console.log(error)
    }
}