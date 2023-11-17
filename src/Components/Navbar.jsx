import React from 'react'
// import './Portfolio.css';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { AiOutlineHome } from 'react-icons/ai';
import { RiUserSearchLine } from 'react-icons/ri';
import { AiOutlineContainer } from 'react-icons/ai';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Components/Navbar.css';

// import Container from 'react-bootstrap/Container';
const Navbar = () => {
  const mynav=useNavigate()
  return (
    <>
      <div className="button-container">
      <button className="button">
        <Nav.Link onClick={() => mynav('/')}><AiOutlineHome/></Nav.Link>
      </button>
      
      <button className="button">
       <Nav.Link  onClick={() => mynav('/about')}><RiUserSearchLine/></Nav.Link>
      </button>
      <button className="button">
        <Nav.Link onClick={() => mynav('/Skills')}><TbActivityHeartbeat/></Nav.Link>
      </button>
      <button className="button">
        <Nav.Link onClick={() => mynav('/Portfolio')}><AiOutlineFundProjectionScreen/></Nav.Link>
      </button>
      <button className="button">
        <Nav.Link onClick={() => mynav('/ContactMe')}><AiOutlineContainer/></Nav.Link>
      </button>
    </div>

    
    </>
  )
}

export default Navbar