 import React, { useState, useEffect } from 'react';
//import { MessageCircle, X, Send, School, Phone, Mail, MapPin, ChevronRight, ChevronLeft, Sidebar } from 'lucide-react';
import Edu from './pages/Edu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js'
import About from './pages/About.js'
import Ecommerce from './pages/Ecommerce.js'
import SocialNetworking from './pages/SocialNetworking.js'
import Health from './pages/Health.js'
import Travel from './pages/Travel.js'
import RealEstate from './pages/Realestate.js'
import Careers from './pages/Careers.js'
import Innovates from './pages/Innovates.js';
import Whychoose from './pages/Whychoose.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/socialNetworking" element={<SocialNetworking />} />
        <Route path="/health" element={<Health />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/innovates" element={<Innovates />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/Whychoose" element={<Whychoose />} />
      </Routes>
    </BrowserRouter>
  );
}

 export default App;
