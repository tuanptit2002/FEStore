import React from 'react';
import './App.css';
import Navbar from "./Componets/Navbar/Navbar";
import Footer from './Componets/footer/Footer';
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contract from "./Pages/Contract/Contract";

import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';

import Cart from "./Pages/Cart/Cart";

import Blog from './Pages/Blog/Blog';

import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";



function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path={'/about'} element={<About />} />
          <Route path={'/contract'} element={<Contract />} />
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/shop'} element={<Shop></Shop>} />
          <Route path={'/blog'} element={<Blog></Blog>} />


          <Route path={'/about'} element={<About />} />
          <Route path={'/contract'} element={<Contract />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/product/:id'} element={<Product />} />
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/sign-up'} element={<Signup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
