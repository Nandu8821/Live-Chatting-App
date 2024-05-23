import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-w-96 mx-auto">

      <div className=' w-full p-6  bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' >
        <h1 className='text-3xl font-bold  text-center text-gray-900'>Signup</h1>
        <form action=''>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-800'>Full Name</span>
            </label>
            <input
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
              className='w-full input input-bordered h-10 '
              type='text'
              placeholder='Confirm Password'

            />
          </div>

          <div className="flex  items-center my-3">
            <div>
              <p className=' text-gray-800'>Male</p>
              <input type="checkbox" defaultChecked className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
            </div>


            <div className='ms-5'>
              <p className=' text-gray-800'>Female</p>
              <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
            </div>
          </div>

          <Link to="/login">
           <h5 className='text-gray-800'> Already have an account?</h5>
          </Link>

          <div className='align-center'>
            <button className="btn btn-block btn-sm mt-2 border-slate-7000">Info</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
