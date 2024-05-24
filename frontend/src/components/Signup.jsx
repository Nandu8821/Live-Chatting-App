import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast"


const Signup = () => {


  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const navigate = useNavigate()

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

     if(res.data.success){
     toast.success(res.data.message)
     navigate("/login")
     }

      console.log(res)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }

   

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })
  }

  return (
    <div className="min-w-96 mx-auto">

      <div className=' w-full p-6  bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' >
        <h1 className='text-3xl font-bold  text-center text-gray-900'>Signup</h1>
        <form onSubmit={onsubmitHandler} action=''>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-800'>Full Name</span>
            </label>
            <input
              value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className='w-full input input-bordered h-10 '
              type='text'
              placeholder='Full name'

            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-800'>User Name</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full input input-bordered h-10 '
              type='text'
              placeholder='Username'
            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-800'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full input input-bordered h-10 '
              type='text'
              placeholder='password'

            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-800'>Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='w-full input input-bordered h-10 '
              type='text'
              placeholder='Confirm Password'

            />
          </div>

          <div className="flex  items-center my-3">
            <div>
              <p className=' text-gray-800'>Male</p>
              <input
                checked={user.gender === 'male'}
                onChange={() => handleCheckbox("male")}
                type="checkbox"
                defaultChecked className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
            </div>


            <div className='ms-5'>
              <p className=' text-gray-800'>Female</p>
              <input
                checked={user.gender === 'female'}
                onChange={() => handleCheckbox("female")}
                type="checkbox"
                defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
            </div>
          </div>

          <Link to="/login">
            <h5 className='text-gray-800'> Already have an account?</h5>
          </Link>

          <div className='align-center'>
            <button type='submit' className="btn btn-block btn-sm mt-2 border-slate-7000">Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
