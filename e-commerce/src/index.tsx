import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Basket from './basket';
import ChangePassword from './changePassword';
import Dashboard from './dashboard';


// import components
import Login from './Login';
import Product from './product';
import Register from './Register';
import Settings from './settings';

const appRoutes =
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/changePassword' element={<ChangePassword />} />
      <Route path='/product' element={<Product />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  </BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(appRoutes);