import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


import Notfound from "./components/Notfound/Notfound.jsx"
import Layout from './components/layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Cardcomponents from './components/Card/Card.jsx';
import PopularFood from './components/PopularFood/PopularFood.jsx';





export default function App() {


  const [card, setcard] = useState([])




// eslint-disable-next-line no-undef





let routers=createBrowserRouter([
  {path:"",element:<Layout  />,children:[
    
    {index:true,element: <Home card={card} setcard={setcard}/>},

    {path:"home",element: <Home card={card} setcard={setcard}/>},
    {path:"popularFoods",element: <PopularFood />},

    {path:"card",element: <Cardcomponents card={card} setcard={setcard}/>},
    
      {path:"*",element: <Notfound/>}
  ]}
])


  return <Provider store={store}>
  <Toaster/>
  <RouterProvider router={routers}></RouterProvider>
  </Provider>
}
