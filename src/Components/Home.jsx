import React from 'react'
import './Portfolio.css';
import Navbar from './Navbar';
// import Images from './Images/ef5f494d-19fe-49cc-a082-977f6c5a74dd.jpg'

const Home = () => {
  return (
    <div className='bg-home' >


        <div className='my-identity'>
        {/* <img src={Images} alt='Your Alt Text' /> */}
        <h3 id='aysha-febin'>Hello, I'm</h3>
            <h1 id='aysha-febin'>Aysha Febin</h1>
            <h6>React Developer</h6>
        <Navbar/>
        </div>
    </div>
  )
}

export default Home