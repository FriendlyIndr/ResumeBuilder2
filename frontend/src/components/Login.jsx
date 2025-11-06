import React from 'react'

const Login = () => {
  return (
    <div>
      {/* Form container */}
      <div className='h-screen flex items-center'>
        {/* Form */}
        <div className='flex flex-col justify-between p-8 mx-auto max-w-xl border rounded-lg space-y-4'>
          <div className='mb-8'>
            <h1 className='text-center text-2xl'>Welcome back!</h1>
            <p className='text-center'>Please fill the following fields.</p>
          </div>

          {/* Fields */}
          <div className='flex items-center justify-between gap-4'>
            <label>Email</label>
            <input 
              type='email'
              className='px-2 py-1 border border-gray-500 rounded-lg'
            />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <label>Password</label>
            <input 
              type='password'
              className='px-2 py-1 border border-gray-500 rounded-lg'
            />
          </div>

          <button
            className='bg-blue-600 text-white p-2 cursor-pointer rounded-lg mt-4'
          >
            Login
          </button>

          {/* Redirect to Signup page */}
          <div>
            <span>Don't have an account? </span>
            <a
              className='cursor-pointer text-blue-600 font-bold'
              href='/signup'
            >
              <u>Let's make one.</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login