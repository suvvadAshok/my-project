import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Education } from './Pages/education';
import { ErrorPage } from './Pages/errorPage';
import { Contact } from './Pages/contact';
import { Gallery } from './Pages/gallary';
import { Experiance } from './Pages/experiance';
import { Home } from './component/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/education",
        element: <Education />,
      },
      {
        path: "/home/Experiance/Technoidentity",
        element: <Experiance />,
      },
      {
        path: "/home/contact",
        element: <Contact />,
      },
      {
        path: "/home/Hobbies/Photography",
        element: <Gallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
