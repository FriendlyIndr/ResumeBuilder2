import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Login method
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    try {
      // Send form data in the request body
      const response = await axios.post("http://localhost:5000/api/users/login", 
        {
          email: email,
          password: password,
        }
      );

      if (response) {
        console.log("Login successful!", response);
      } else {
        console.log("Login unsuccessful!", response);
      }
    } catch (err) {
      setError(err.response.data.message);
      console.log("Error submiting login form data:", err);
    }
  }

  return (
    <div>
      {/* Form container */}
      <div className='h-screen flex items-center'>
        {/* Form */}
        <form 
          onSubmit={handleLogin}
          className='flex flex-col justify-between p-8 mx-auto max-w-xl border rounded-lg space-y-4'
        >
          <div className='mb-8'>
            <h1 className='text-center text-2xl'>Welcome back!</h1>
            <p className='text-center'>Please fill the following fields.</p>
          </div>

          {/* Fields */}
          <div className='flex items-center justify-between gap-4'>
            <label>Email</label>
            <input 
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-2 py-1 border border-gray-500 rounded-lg'
            />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <label>Password</label>
            <input 
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='px-2 py-1 border border-gray-500 rounded-lg'
            />
          </div>

          {error && (
            <div className='text-red-500'>
              {error}
            </div>
          )}

          <button
            type='submit'
            disabled={(!email || !password)}
            className={`bg-blue-600 text-white p-2
              ${
                (!email || !password) ? 'bg-gray-400' : 'cursor-pointer'
              } rounded-lg mt-4`}
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
        </form>
      </div>
    </div>
  )
}

export default Login