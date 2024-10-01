import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Layout from './Layout.jsx';
import Landing from './pages/Landing.jsx';
import ViewTodos from './pages/ViewTodos.jsx';
import CreateTodo from './pages/CreateTodo.jsx';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    // loader:
    errorElement: <Error />, // Optional: handle errors for this route
    children: [
      {
         path:'',
         element:<Landing/>
      },
      {
        path: 'home',
        element: <App />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'view',
        element: <ViewTodos />,
      },
      {
        path: 'create',
        element: <CreateTodo/>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
