import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Templates from './components/Templates'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/templates",
      element: <Templates />,
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
