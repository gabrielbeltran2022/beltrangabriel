import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Cards'
import Home from './pages/Home'
import Marketing from './pages/Marketing'
import Consulting from './pages/Consulting'
import Design from './pages/Design'
import Development from './pages/Development'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/consulting" element={<Consulting/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/development" element={<Development/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/featured" element={<Cards/>}/>
      </Routes>
    </Router>
  );
}

export default App;