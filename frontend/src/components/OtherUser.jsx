import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
const dispatch = useDispatch();
const {selectedUser} = useSelector(store=>store.user)
const selectedUserHandler =(user)=>{
    
    dispatch(setSelectedUser(user))
}

return (
        <>
            <div onClick={()=>selectedUserHandler(user)} className={` ${selectedUser?._id === user?._id ? " hover:bg-black" : ""} flex gap-5 items-center    hover:bg-black rounded p-2 cursor-pointer`}>
                <div className='avatar online '>
                    <div className='w-12 rounded-full'>
                        <img src={user.profilePhoto} alt='img' />
                    </div>
                </div>

                <div className=' flex flex-col flex-1'>
                    <div className='flex justify-between items-center  gap-2  text-white'>
                        <p>{user?.fullName} </p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default OtherUser