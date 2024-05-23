import React from 'react'
import './App.css'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'

import { RouterProvider, createBrowserRouter} from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },

  {
    path: "/register",
    element:<Signup />
  },

  {
    path: "/login",
    element:<Login />
  },

]
 )

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
