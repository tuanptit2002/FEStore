import React from 'react';
import './App.css';
import Navbar from "./Componets/Navbar/Navbar";
import Footer from './Componets/footer/Footer';
import About from "./Pages/About/About";
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import Contract from "./Pages/Contract/Contract";

function App() {
  return (
    <div >
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contract'} element={<Contract/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>


    </div>
  );
}

export default App;
