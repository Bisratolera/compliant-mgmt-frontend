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
import Notfound from './Pages/Notfound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      
      {
        path: "/userpage",
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
      {
        path:"/*",
        element:<Notfound />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
