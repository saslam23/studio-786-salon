import React from 'react';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <div>
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
    <Link  to="home" ><img className="studiologo" src="/assets/s786-white.png"/></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
       <Link className="navi-item" to="/" >Home</Link>
       <Link className="navi-item" to="/services" >Services</Link>
       <Link className="navi-item" to="/about"  >About</Link>
        <Link className="navi-item" to="/contact" >Contact</Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar> 
          </div>
  )
}

