import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux';
import {setMessage} from "../redux/messageSlice"


const SendInput = () => {
  
    const [msg,setMsg]=useState("")

    const dispatch = useDispatch();
    const {messages} = useSelector(store=>store.message)

    const { selectedUser } = useSelector(store => store.user)
 
    const onHandleSubmit = async (event) =>{
        event.preventDefault()
     try {
        
        const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{msg},{
            Headers :  {
                'Content-Type':'application/json'
            },
            withCredentials:true,
        });

         dispatch(setMessage([...messages, res?.data?.newMessage]))
        
     } catch (error) {
        console.error(error)
     }
 
  setMsg("")
    }
  


    return (
        <form onSubmit={onHandleSubmit}  className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                   value={msg}
                   onChange={(e)=>setMsg(e.target.value)}
                    type="text" placeholder="Send a Message..." className='border text-sm rounded-lg block w-full p-3 borde-zinc-500 bg-gray-600 text-white ' />
                <button  type='submit' className="absolute flex inset-y-0 end-0 pr-3 items-center ">
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default SendInput
