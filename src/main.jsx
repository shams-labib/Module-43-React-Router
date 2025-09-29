import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDeatls from './PostDetails/PostDeatls.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());


const router = createBrowserRouter([
  {
    path: '/',
   Component: Root,
   children:[
    {   index: true, Component:Home},
    {path:'mobiles', Component:Mobiles},
    {path:'laptops', Component:Laptops},
    {path:'users', 
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      Component:Users},
      {
        path:'users2', 
        element:<Suspense fallback={<h1>Loding......</h1>}>

            <Users2 userPromise={userPromise} ></Users2>
        </Suspense>
      },
      {
        path:'users/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        
        Component:UserDetails
      },
      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postsId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`),
        Component:PostDeatls
      }
   ]
  },

  {
    path: 'about',
    element: <div>About are here</div>
  },

  {
    path:'app',
    Component: App
  },

  // ekhan ekta twist holo ami jokhon components use korbo tokhon sudhu setar name dilei hobe, but ami jokhon element use korbo tokhon setar components er mto dite hobe, setar example niche deya holo

  {
    path:'app2',
    element: <App></App>
  },
  //  so ekhane ekdm last porjaye suppose ami jdi kono kono kisu na paoya gele kono kisu ekta dekhaite cai tahole amake customize vabe arekta notun path banaite hobe, jdi kono kisu na paoya jay tahole seta dekhabe,
  {
    path: '*',
    element: <h3>Not Found : 404</h3>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
