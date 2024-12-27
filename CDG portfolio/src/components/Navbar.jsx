import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-bar'>
      <h1 className='logo'>C . D . G</h1>
     <ul>
    <li><a href="#Home">Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Services">Services</a></li>
    <li><a href="#Projects">Projects</a></li>
     </ul>
     <div className="btns">
      <button className='btns'>Contact</button>
     </div>
    </div>
  )
}

export default Navbar