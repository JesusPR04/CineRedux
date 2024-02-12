import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Store/store.js';

import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Search from './pages/Search.jsx';
import Information from './pages/Information.jsx';
import Buy from './pages/Buy.jsx';
import Favourite from './pages/Favourite.jsx';
import Shopping from './pages/Shopping.jsx';

// Estructura principal de mi página web
function AppLayout() {
  return <>
   <Navbar />
    <Outlet />
   <Footer />  
  </>
} 

// Diferentes rutas
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <App />,
    },
    {
      path: "/movies",
      element: <Search />,
    },
    {
      path: "/information/:id",
      element: <Information />,
    },
    {
      path: "/buy/:title/:posterPath",
      element: <Buy />,
    },
    {
      path: "/favourite",
      element: <Favourite />,
    },
    {
      path: "/shopping",
      element: <Shopping />,
    }]
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>
  </React.StrictMode>,
);
