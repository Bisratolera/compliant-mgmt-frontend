import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';
import Department from './Pages/Department';
import AdminLogin from './Pages/AdminLogin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <UserPage />, 
      }, 
      {
        path: "/adminlogin",
        element: <AdminLogin />, 
      },
      {
        path: "/adminpage",
        element: <AdminPage />,
      },
      {
        path: "/department",
        element: <Department />,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
