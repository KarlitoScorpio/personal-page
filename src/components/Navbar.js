import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  return (
      <nav className="navbar">
        <NavLink to="/" className="logo_link">
          <img src={logo} alt="logo" className="logo"></img>
        </NavLink>
        <div className="navbar_links">
          <NavLink to="/about" className="navbar_link">About</NavLink>
          <NavLink to="/projects" className="navbar_link">Projects</NavLink>
        </div>
      </nav>
  )
}

export default Navbar