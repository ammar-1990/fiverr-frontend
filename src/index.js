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
        element:<Orders />
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
        element:<Messages />
      },
      {
        path:'message/:id',
        element:<Message />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);


