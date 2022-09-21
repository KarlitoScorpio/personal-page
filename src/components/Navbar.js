import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import Linkedin from '../assets/linkedin_logo.svg'
import Github from '../assets/github_logo.svg'

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
        <div className="social_media">
            <a href="https://www.linkedin.com/in/karlo-%C5%A1imunec-662174223/" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="LinkedIn logo" className="linkedin"></img>
            </a>
            <a href="https://github.com/KarlitoScorpio" target="_blank" rel="noreferrer">
              <img src={Github} alt="GitHub logo" className="github"></img>
            </a>
        </div>
      </nav>
  )
}

export default Navbar