import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to API
      const response = await axios.post("http://localhost:5000/api/users/register", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })

      if (response) {
        console.log("Response:", response);
      }
    } catch (err) {
      console.log("Error signing in:", err);
    }
    console.log("wewewewe");
  }

  return (
    <div>
      {/* Form container */}
      <div className='h-screen flex items-center'>
        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className='flex flex-col justify-center p-8 mx-auto max-w-2xl border rounded-lg space-y-4'
        >
          <div className='mb-8'>
            <h1 className='text-center text-2xl'>Let's get you started!</h1>
            <p className='text-center'>Please fill the following fields.</p>
          </div>

          {/* Fields */}
          <div className='flex items-center justify-between gap-4'>
            <label>Email</label>
            <input 
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-2 py-1 w-2xs border border-gray-500 rounded-lg'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center'>
              <label>Password</label>
              <input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='px-2 py-1 w-2xs border border-gray-500 rounded-lg'
              />
            </div>

            <div className='flex flex-col justify-center'>
              <label>Re-enter Password</label>
              <input 
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='px-2 py-1 w-2xs border border-gray-500 rounded-lg'
              />
            </div>
          </div>

          <button
            type='submit'
            className='bg-blue-600 text-white p-2 cursor-pointer rounded-lg mt-4'
          >
            Sign up
          </button>

          {/* Redirect to Signup page */}
          <div className='text-center'>
            <span>Already have an account? </span>
            <a
              className='cursor-pointer text-blue-600 font-bold'
              href='/login'
            >
              <u>Let's sign you in.</u>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup