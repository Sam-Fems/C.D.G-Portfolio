import React from 'react'
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/Team'; 
import Pricings from './pages/Pricings'
const App = () => {
  return (
    <>
       <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/price" element={<Pricings/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App
