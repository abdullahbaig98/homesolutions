import React, {useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../images/logo.jpg";
import Loginreg from './loginreg';
const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };
  return (
    <Navbar bg="primary" expand="lg"  className='p-2 text-light fixed-top'> 
   
      <Navbar.Brand href="localhost:3000/" className='text-light'>
        <img src={logo} height={40} width={40} className='rounded-circle' alt=''/> Home Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto justify-content-end text-light" style={{textAlign:'right', width:'100%'}}>
          <Nav.Link href="#home"className='text-light'>Home</Nav.Link>
          <Nav.Link href="#about" className='text-light'>About</Nav.Link>
          <Nav.Link href="#services" className='text-light'>Services</Nav.Link>
          <Nav.Link href="#contact" className='text-light'>Contact</Nav.Link>
          <Nav.Link href="" onClick={handleModalOpen} className='text-light'>Login/Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Loginreg show={modalShow} onHide={handleModalClose} />
  </Navbar>
  )
}

export default Header
