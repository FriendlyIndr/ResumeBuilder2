import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Templates from './components/Templates'
import Login from './components/Login'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/templates",
      element: <Templates />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
