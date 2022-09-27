import React from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import {Routes,Route} from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Product } from './pages/Product/Product';
import { Register } from './pages/Register/Register';
import { Order } from './pages/Order/Order';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
  );
}

export default App;
