import React from 'react'
import ClickerMaster from '../assets/ClickerMaster.png'
import Batak from '../assets/Batak.png'
import PasswordGenerator from '../assets/PasswordGenerator.png'
import FunFacts from '../assets/FunFacts.png'
import PersonalBudgetingApp from '../assets/PersonalBudgetingApp.png'
import { useInView } from 'react-intersection-observer';

function ProjectsBody() {

  const { ref: projectRef1, inView: isVisible1 } = useInView({
    threshold: 0.5
  })

  const { ref: projectRef2, inView: isVisible2 } = useInView({
    threshold: 0.5
  })

  const { ref: projectRef3, inView: isVisible3 } = useInView({
    threshold: 0.5
  })

  const { ref: projectRef4, inView: isVisible4 } = useInView({
    threshold: 0.5
  })

  const { ref: projectRef5, inView: isVisible5 } = useInView({
    threshold: 0.5
  })

  return (
    <>
      <div className="projects_wrapper">
        <div className="project" ref={projectRef1}>
          <div className="project_text">
            {isVisible1 ? <a href="https://github.com/KarlitoScorpio/clicker-master" className="project_left_name" target="_blank" rel="noreferrer">Clicker Master</a> : ""}
            {isVisible1 ? <p className="project_left_type">Game</p> : ""}
            {isVisible1 ? <p className="project_left_about">Adaptive design, supports English and Croatian language and has automatic table filling and sorting.</p> : ""}
          </div>
          <div className="project_image">
            {isVisible1 ? <img src={ClickerMaster} alt="project 1" className="project_img project_left_image"></img> : ""}
          </div>        
        </div>
        {window.innerWidth > 768 ?
          <div className="project" ref={projectRef2}>
            <div className="project_text">
              {isVisible2 ? <a href="https://github.com/KarlitoScorpio/batak" className="project_right_name" target="_blank" rel="noreferrer">Batak</a> : ""}
              {isVisible2 ? <p className="project_right_type">Game</p> : ""}
              {isVisible2 ? <p className="project_right_about">Adaptive design, supports English and Croatian language and has automatic table filling and sorting.</p> : ""}
            </div>
            <div className="project_image">
              {isVisible2 ? <img src={Batak} alt="project 2" className="project_img project_right_image"></img> : ""}
            </div>
          </div>
        :
          <div className="project project_margin_top" ref={projectRef2}>
            <div className="project_text">
              {isVisible2 ? <a href="https://github.com/KarlitoScorpio/batak" className="project_right_name" target="_blank" rel="noreferrer">Batak</a> : ""}
              {isVisible2 ? <p className="project_right_type">Game</p> : ""}
              {isVisible2 ? <p className="project_right_about">Adaptive design, supports English and Croatian language and has automatic table filling and sorting.</p> : ""}
            </div>
            <div className="project_image">
              {isVisible2 ? <img src={Batak} alt="project 2" className="project_img project_right_image"></img> : ""}
            </div>
          </div>
        }
        <div className="project project_margin_top" ref={projectRef3}>
          <div className="project_text">
            {isVisible3 ? <a href="https://github.com/KarlitoScorpio/password-generator" className="project_left_name" target="_blank" rel="noreferrer">Password Generator</a> : ""}
            {isVisible3 ? <p className="project_left_type">App</p> : ""}
            {isVisible3 ? <p className="project_left_about">Responsive design, generates random 10 character passwords, background is alive, and has copy to clipboard function.</p> : ""}
          </div>
          <div className="project_image">
            {isVisible3 ? <img src={PasswordGenerator} alt="project 3" className="project_img project_left_image"></img> : ""}
          </div>         
        </div>
        <div className="project project_margin_top" ref={projectRef4}>
          <div className="project_text">
            {isVisible4 ? <a href="https://github.com/KarlitoScorpio/fun-facts" className="project_right_name" target="_blank" rel="noreferrer">Fun Facts</a> : ""}
            {isVisible4 ? <p className="project_right_type">App</p> : ""}
            {isVisible4 ? <p className="project_right_about">Responsive design made with React-Bootstrap, Fun facts are generated with Facts API by API Ninjas.</p> : ""}
          </div>
          <div className="project_image">
            {isVisible4 ? <img src={FunFacts} alt="project 4" className="project_img project_right_image"></img> : ""}
          </div>
        </div>
        <div className="project project_margin_top" ref={projectRef5}>
          <div className="project_text">
            {isVisible5 ? <a href="https://github.com/KarlitoScorpio/personal-budgeting-app" className="project_left_name" target="_blank" rel="noreferrer">Personal Budgeting App</a> : ""}
            {isVisible5 ? <p className="project_left_type">App</p> : ""}
            {isVisible5 ? <p className="project_left_about">UI made with React-Bootstrap, uses Local Storage as database, charts are generated with Victory (React chart library).</p> : ""}
          </div>
          <div className="project_image">
            {isVisible5 ? <img src={PersonalBudgetingApp} alt="project 5" className="project_img project_left_image"></img> : ""}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsBody