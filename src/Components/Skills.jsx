import React from 'react'
import './Portfolio.css';
// import { ImStatsDots } from 'react-icons/im';
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6';
import { TbBrandJavascript ,TbBrandRedux} from 'react-icons/tb';
import { Navbar } from 'react-bootstrap';

const Skills = () => {
  return (
    <>
    
    <div className='skills'>
        <div className='my-skills'>
            <h1 className='title-skills'>My Skills</h1>
        </div>
        <div className='all-skills'>
            <h2 className='dvlpr'>Front-End Developer</h2>
          <div className='skills-main'>

            <div className='skillset'>
            <FaHtml5 className='icons-skl'/>
            <span>HTML</span>

            </div>
            <div className='skillset'>
            <TbBrandJavascript className='icons-skl'/>
            <span>JAVASCRPT</span>

            </div>
            <div className='skillset'>
            <FaCss3 className='icons-skl'/>
            <span>CSS</span>

            </div>
            <div className='skillset'>
            <FaReact className='icons-skl'/>
            <span>REACT</span>

            </div>
            <div className='skillset'>
            <TbBrandRedux className='icons-skl'/>
            <span>REDUX</span>

            </div>
           
          </div>

        </div>
        <Navbar/>

    </div>
   
    </>
  )
}

export default Skills