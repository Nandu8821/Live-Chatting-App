 import jwt from "jsonwebtoken"


const isAuthenticated = async (req,res,next)=>{
   try{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Not Authenticated"})
    }
    const decode= await jwt.verify(token,process.env.JWT_SECRET_KEY);
    
    if(!decode){
        return res.status(401).json({message:"INVALID_TOKEN"})
    }
    req.id = decode.userId
     next();
   }catch(error){
    console.log(error)
   }
}

export default isAuthenticated;

const req ={
    id:"",
}
req.id = "asdfgnbhgf"