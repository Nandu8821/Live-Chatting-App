import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-w-96 mx-auto">

    <div className=' w-full p-6  bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' >
      <h1 className='text-3xl font-bold  text-center text-gray-900'>Login</h1>
      <form action=''>
    

        <div>
          <label className='label p-2 '>
            <span className='text-base label-text text-gray-900'>User Name</span>
          </label>
          <input
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
            className='w-full input input-bordered h-10 '
            type='text'
            placeholder='password'

          />
        </div>

        <Link to="/register">
         <h5 className='text-gray-900'> Dont't have an account?</h5>
        </Link>

        <div className='align-center'>
          <button className="btn btn-block btn-sm mt-2 border-slate-7000">Login</button>
        </div>

      </form>
    </div>
  </div>
)
}


export default Login
