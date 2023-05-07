import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import AddCoffe from './Component/AddCoffee/AddCoffe.jsx'
import UpdateCoffe from './Component/UpdateCoffe/UpdateCoffe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addcoffee',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:"/updatecoffee",
    element:<UpdateCoffe></UpdateCoffe>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
