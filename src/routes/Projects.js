import React from 'react'
import { Navbar, ProjectsBody, ParticlesApp } from '../components/index'

function Projects() {
  return (
    <div className="app overflow">
      <Navbar />
      <ProjectsBody />
      <ParticlesApp />
    </div>
  )
}

export default Projects