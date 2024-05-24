import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/userSlice'


const Login = () => {

  const [user ,setUser]=useState({
    username:"",
    password:"",
  
   })

 const navigate = useNavigate()  
 const dispatch = useDispatch()
 
   const onsubmitHandler = async (e)=>{
    e.preventDefault();
    
    try {
      
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

     if(res.data.success){
     toast.success(res.data.message)
     navigate("/")
     dispatch(setAuthUser(res.data))
     }

      console.log(res)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }


    setUser({
      username:"",
      password:"",
     
    })
   }



  return (
    <div className="min-w-96 mx-auto">

    <div className=' w-full p-6  bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' >
      <h1 className='text-3xl font-bold  text-center text-gray-900'>Login</h1>
      <form action='' onSubmit={onsubmitHandler}>
    

        <div>
          <label className='label p-2 '>
            <span className='text-base label-text text-gray-900'>User Name</span>
          </label>
          <input
          value={user.username}
          onChange={(e)=>setUser({...user,username:e.target.value})}
            className='w-full input input-bordered h-10 '
            type='text'
            placeholder='Username'
          />
        </div>

        <div>
          <label className='label p-2 '>
            <span className='text-base label-text text-gray-900'>Password</span>
          </label>
          <input
          value={user.password}
          onChange={(e)=>setUser({...user,password:e.target.value})}
            className='w-full input input-bordered h-10 '
            type='text'
            placeholder='password'

          />
        </div>

        <Link to="/register">
         <h5 className='text-gray-900'> Dont't have an account?</h5>
        </Link>

        <div className='align-center'>
          <button  type='submit' className="btn btn-block btn-sd mt-2 border-slate-7000">Login</button>
        </div>

      </form>
    </div>
  </div>
)
}


export default Login
