import React from 'react'
import ClickerMaster from '../assets/ClickerMaster.png'
import Batak from '../assets/Batak.png'
import PasswordGenerator from '../assets/PasswordGenerator.png'
import { useInView } from 'react-intersection-observer';

function ProjectsBody() {

  const { ref: projectRef, inView: isVisible } = useInView({
    threshold: 0
  })

  const { ref: projectRef1, inView: isVisible1 } = useInView({
    threshold: 0
  })

  return (
    <>
    <div className="projects_wrapper">
        <div className="project" ref={projectRef}>
          <div className="project_text">
            {isVisible ? "" : <p className="project_left_name">Clicker Master</p>}
            {isVisible ? "" : <p className="project_left_type">Game</p>}
            {isVisible ? "" : <p className="project_left_about">Has adaptive design, supports English and Croatian language and has automatic table filling and sorting.</p>}
          </div>
          <div className="project_image">
            {isVisible ? "" : <img src={ClickerMaster} alt="project 1" className="project_img project_left_image"></img>}
          </div>        
        </div>
        {window.innerWidth > 768 ?
          <div className="project" ref={projectRef}>
            <div className="project_text">
              {isVisible ? "" : <p className="project_right_name">Batak</p>}
              {isVisible ? "" : <p className="project_right_type">Game</p>}
              {isVisible ? "" : <p className="project_right_about">Has adaptive design, supports English and Croatian language and has automatic table filling and sorting.</p>}
            </div>
            <div className="project_image">
              {isVisible ? "" : <img src={Batak} alt="project 2" className="project_img project_right_image"></img>}
            </div>
          </div>
          :
          <div className="project project_margin_top" ref={projectRef1}>
            <div className="project_text">
              {isVisible1 ? <p className="project_right_name">Batak</p> : ""}
              {isVisible1 ? <p className="project_right_type">Game</p> : ""}
              {isVisible1 ? <p className="project_right_about">Has adaptive design, supports English and Croatian language and has automatic table filling and sorting.</p> : ""}
            </div>
            <div className="project_image">
              {isVisible1 ? <img src={Batak} alt="project 2" className="project_img project_right_image"></img> : ""}
            </div>
          </div>
          }
        <div className="project project_margin_top" ref={projectRef}>
          <div className="project_text">
            {isVisible ? <p className="project_left_name">Password Generator</p> : ""}
            {isVisible ? <p className="project_left_type">App</p> : ""}
            {isVisible ? <p className="project_left_about">Has responsive design, generates random 10 character passwords, background is alive, and has copy to clipboard function.</p> : ""}
          </div>
          <div className="project_image">
            {isVisible ? <img src={PasswordGenerator} alt="project 3" className="project_img project_left_image"></img> : ""}
          </div>         
        </div>
      </div>
    </>
  )
}

export default ProjectsBody