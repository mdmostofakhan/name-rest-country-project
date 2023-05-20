import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import First from './components/frist/First.jsx';
import About from './components/about/About.jsx';
import Friend from './components/friends/Friend.jsx';
import FriendDetails from './components/frienDetails/FriendDetails.jsx';
import Post from './components/post/Post.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      }, 
      {
        path:'friends',
        element: <Friend></Friend>,
        loader: () => fetch ('https://jsonplaceholder.typicode.com/todos')
      }, 
      {
        path: 'friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/todos/${params.friendId}`)
      }, 
      {
        path: 'post',
        element: <Post></Post>,
        loader: ({params}) => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '*',
        element: <div>444404444</div>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
