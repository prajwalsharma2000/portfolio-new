import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import './intro.css'

const Intro = () => {
    // const textRef = useRef();
    // useEffect(()=>{
    //   init(textRef.current,{
    //     showCursor:true,
    //     backDelay: 1000,
    //     strings: ['Software', 'Frontend', 'Backend'],
    //   })
    // },[])
  return (
    <div className='Intro'>
        <h1 className='name-header'>Hi, I'm Prajwal Sharma</h1>
        {/* <h3><span ref={textRef}></span> Developer</h3> */}
        <h3 className='swe'>A Software Developer</h3>
        <p className='discription'>I am a development enthusiast and a C++ programmer. With robust problem-solving skills to create a direct impact in a test-driven environment. My co-curricular experiences have significantly contributed to my team management and leadership skills.</p>
        <div className='media-icons'>
            <div className='linkedin'>
                <FaLinkedinIn className='linkedin-icon'/>
            </div>
            <div className='github' >
                <FaGithub className='github-icon'/>
            </div>
        </div>
        <div className='contact-buttons'>
            <button className='read-more'>Read More</button>
            <button className='contact-me'>Contact Me</button>
        </div>
    </div>
  )
}

export default Intro