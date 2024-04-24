import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import MainLayout from './pages/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Products from './pages/Products.jsx'
import SingleProducts from './pages/SingleProducts.jsx'
import Posts from './pages/Posts.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path='products/:productId' element={<SingleProducts/>}/>
              <Route path='posts' element={<Posts/>}/>
              <Route path='*' element={<Error/>}/>
            </Route>


            
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App