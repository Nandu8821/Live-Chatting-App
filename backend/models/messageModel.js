import mongoose, { Mongoose } from "mongoose";

const messageModel = new mongoose.Schema({
    senderId:{
        type : Mongoose.Schema.types.ObjectId,
        ref : "User",
        required : true,
    },
    receiverId:{
        type : Mongoose.Schema.types.ObjectId,
        ref : "User",
        required : true,
    },
    message:{
       type:"string",
       required : true,
    }
},{timestamps:true});

export const Message = mongoose.model("Message",messageModel)

