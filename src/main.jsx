import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {About, Cart, Contact, ErrorPage, Home, Products, SingleProduct} from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store.js';
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '/',
        element:<Home/>,
      },
      {
        path: '/about',
        element:<About/>,
      },
      {
        path: '/products',
        element:<Products/>,
      },
      {
        path: '/contact',
        element:<Contact/>,
      },
      {
        path: '/singleproduct/:id',
        element:<SingleProduct/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:'*',
        element:<ErrorPage/>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-4z3bzk01evrlrg3u.us.auth0.com"
  clientId="6j1SN9MiJSFHiyZjZzwPhuqUexNpFCjp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* React.StrictMode: Wraps the entire application to enable strict mode checks.? */}
  <React.StrictMode>
    {/* Provider: Wraps the application to provide the Redux store to all components. */}
    <Provider store={store}>
    {/* RouterProvider: Wraps the application to provide routing capabilities */}
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
  </Auth0Provider>
)
