import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"

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