import React from 'react'
import './Portfolio.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='bg-home'>
        <div className='my-identity'>
        <h3 id='aysha-febin'>Hello, I'm</h3>
            <h1 id='aysha-febin'>Aysha Febin</h1>
            <h6>React Developer</h6>
        <Navbar/>
        </div>
    </div>
  )
}

export default Home