import React from 'react'

const Signup = () => {
  return (
    <div>
      {/* Form container */}
      <div className='h-screen flex items-center'>
        {/* Form */}
        <div className='flex flex-col justify-center p-8 mx-auto max-w-xl border rounded-lg space-y-4'>
          <div className='mb-8'>
            <h1 className='text-center text-2xl'>Let's get you started!</h1>
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

          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center'>
              <label>Password</label>
              <input 
                type='password'
                className='px-2 py-1 border border-gray-500 rounded-lg'
              />
            </div>

            <div className='flex flex-col justify-center'>
              <label>Re-enter Password</label>
              <input 
                type='password'
                className='px-2 py-1 border border-gray-500 rounded-lg'
              />
            </div>
          </div>

          <button
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
        </div>
      </div>
    </div>
  )
}

export default Signup