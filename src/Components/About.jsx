import React from 'react'
import './Portfolio.css';
import { FaGraduationCap } from 'react-icons/fa6';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import Navbar from './Navbar';


const About = () => {
  return (
    <>
    <div className='about'>
        
        <div className='about-me'>
            <h1 className='me'>About Me</h1>
        </div>
       <br />
       <br />
       <br />
       <div className='details'>
        <p className='my-self'> I started with commerce in high school and then got my degree <br /> in psychology. 
             Now, I'm learning coding to gain new skills. <br /> I've already made a static responsive website and even <br /> 
             created a responsive website using JavaScript and Bootstrap. <br /> I'm excited to keep growing and learning!</p> 
       </div>

       <div className='experience'>
        <div className='qlfctn'>
        <FaGraduationCap className='icons'/>
            <h3 className='title-qlfctn'>Qualification</h3>
            <h4 className='title-dgre'>Degree</h4>
        </div>
        <div className='prjct'>
            <AiOutlineFundProjectionScreen className='icons'/>
        <h3 className='title-prjct'>Projects</h3>
            <h4 className='title-2'>2+ Completed Projects</h4>
        </div>
       </div>
       <Navbar/>
       {/* <div className='nav'>

       </div> */}
    </div>
    
    </>
  )
}   

export default About