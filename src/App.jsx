import { useState } from 'react'

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import Footer from './Components/Footer';
import Destination_page from './Components/Destination_page';
import Booking_page from './Components/Booking_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Packages_page from './Components/Packages_page';
import Contact from './Components/Contact';


function App() {



  return (
    <>
       
      
      <BrowserRouter>
       <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination_page />} />
      <Route path="/booking" element={<Booking_page />} />
      <Route path="/package" element={<Packages_page />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
      <Footer /> 
    </BrowserRouter>

     
      
     
    </>
    
  );
  }
export default App;
