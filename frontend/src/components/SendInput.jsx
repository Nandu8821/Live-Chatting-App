import React from 'react'
import { IoSend } from "react-icons/io5";

const SendInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input type="text" placeholder="Send a Message..." className='border text-sm rounded-lg block w-full p-3 borde-zinc-500 bg-gray-600 text-white ' />
                <button className="absolute flex inset-y-0 end-0 pr-3 items-center ">
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default SendInput
