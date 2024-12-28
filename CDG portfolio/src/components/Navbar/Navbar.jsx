import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h2 className="logo">CODEZ</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">AboutUs</Link></li>
          <li><Link to="/teams">Team</Link></li>
          <li><Link to="/price">Pricings</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar