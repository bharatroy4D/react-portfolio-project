import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ErrorPages from './components/ErrorPages/ErrorPages.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
