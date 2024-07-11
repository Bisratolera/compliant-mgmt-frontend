import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AdminPage from './Pages/AdminPage';
import Department from './Pages/Department';
import AdminLogin from './Pages/AdminLogin';
import NotFound from './Pages/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'adminlogin', element: <AdminLogin /> },
      { path: 'adminpage', element: <AdminPage /> },
      { path: 'department', element: <Department /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
