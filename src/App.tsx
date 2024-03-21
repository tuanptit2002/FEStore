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


function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/about'} element={<About />} />
          <Route path={'/contract'} element={<Contract />} />
          <Route path={'/home'} element={<Homepage />} />
          <Route path={'/shop'} element={<Shop></Shop>} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/about'} element={<About />} />
          <Route path={'/contract'} element={<Contract />} />
          <Route path={'/cart'} element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
