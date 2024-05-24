import React from 'react'
import Message from "./Message"
import { useSelector } from 'react-redux';
import useGetMessages from '../hooks/useGetMessages'

const Messages = () => {

 useGetMessages();

 const {messages} = useSelector(store=>store.message)

 if(!messages) return;


  return (
    <div className='px-4 flex-1 overflow-auto'>

    {
      messages?.map((msg)=>{
        return (
         <Message key={msg._id} msg={msg.Message}  />
        )
      })
    }
  

      
    </div>
  )
}

export default Messages
