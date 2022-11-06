import React from 'react'
import MyPicture from '../assets/ja.png'
import { useInView } from 'react-intersection-observer'

function AboutBody() {

    const { ref: projectRef, inView: isVisible } = useInView({
        threshold: 1
    })
        
  return (
    <>
    <div className="about_wrapper">
        <div className="aboutbody_picture" ref={projectRef}>
        {window.innerWidth > 768 ?   
            <>
            {isVisible ? <img src={MyPicture} alt="Me" className="my_picture"></img> : ""}
            </>
        :
            <>
            {isVisible ? "" : <img src={MyPicture} alt="Me" className="my_picture"></img>}
            </>
        }
        </div>
        <div className="aboutbody_text" ref={projectRef}>
            {isVisible ? <li className="li1">Karlo Šimunec (23) is young front-end web developer from Croatia and this is his story:</li> : ""}
                <ul>
                    {isVisible ? <li className="li2">Through the elementary school and high school, he didn't understand programming and tought it'll be the last job he would ever do.</li> : ""}
                    <br></br>
                    {isVisible ? <li className="li3">At university he got a passion for web design and web development. HTML and CSS became simple to him so he became motivated and continued learning. Soon after he started learning Javascript and has no intentions to stop.</li> : ""}
                    <br></br>
                    {isVisible ? <li className="li4">Today, run by his passion for web development, he works hard every day to be as best front-end web developer as possible. Recently he started learning React.</li> : ""}
                    <br></br>
                    {isVisible ? <li className="li5">What Karlo wants to tell you with his story?</li> : ""}
                    <br></br>
                    <ul>
                    {isVisible ? <li className="li6">If some things in your life you think you can't overcome, don't give up. Do your best and maybe you overcome it, fall in love with it and found out that maybe it is your life calling.</li> : ""}
                    </ul>
                </ul>
            {isVisible ? <li className="li7">In his free time, Karlo loves to watch and play basketball, listen to music, hang out with friends and workout.</li> : ""}
        </div>
    </div>
    </>
  )
}

export default AboutBody