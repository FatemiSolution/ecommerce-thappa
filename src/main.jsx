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
    domain="dev-jt5zlrxgm0r70jf8.us.auth0.com"
    clientId="mhN5TLMIexGaXmLhseNpxaxhKWnW5IzI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
  </Auth0Provider>
)
