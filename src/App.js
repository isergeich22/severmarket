import React from 'react';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProductCard from './pages/ProductCard';

export default function App() {

  return(

    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/card' element={<ProductCard />}></Route>
    </Routes>

  )

}