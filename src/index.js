import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import Gigs from './pages/Gigs'
import Gig from './pages/Gig'
import Orders from './pages/Orders'
import MyGigs from './pages/MyGigs'
import Add from './pages/Add'
import Messages from './pages/Messages'
import Message from './pages/Message'
import Login from './pages/Login'
import AuthContextProvider from './contexts/authContext';
import Register from './pages/Register';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AuthRequired from './components/AuthRequired'



const queryClint = new QueryClient()
const router = createBrowserRouter([

  {
    path:'/',
    element:<Layout />,
    children:[
      {
        index:true,
        element:<Home/>
      },

      {
        path:'gigs',
        element:<Gigs />
      },
      {
        path:'gig/:id',
        element:<Gig />
      },
      {
        path:'orders',
        element:<AuthRequired><Orders /></AuthRequired>
      },
      {
        path:'mygigs',
        element:<MyGigs />
      },
      {
        path:'add',
        element:<Add />
      },
      {
        path:'messages',
        element:<AuthRequired><Messages /></AuthRequired>
      },
      {
        path:'message/:id',
        element:<AuthRequired><Message /></AuthRequired>
      },
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/register',
    element:<Register />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <QueryClientProvider client={queryClint}>
    <AuthContextProvider>
<RouterProvider router={router} />
</AuthContextProvider>
</QueryClientProvider>

);


