import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from '../node_modules/react-router-dom/dist/index'
import Error from './pages/error'
import Home from './pages/home'
import "./index.css"
import Pokedex from './pages/pokedex/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error/>
  },
  {
    path: '/pokedex',
    element: <Pokedex />,
    errorElement: <Error/>
  },
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
