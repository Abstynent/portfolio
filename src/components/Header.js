import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Header.css';
const title = "wookashPortfolio";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-bg-custom">
      <Container>
        <Navbar.Brand className='header-item'>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='header-item dropdown' href="#home">About Me</Nav.Link>
            <Nav.Link className='header-item dropdown'  href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='header-item dropdown'  href="#contact">Contact</Nav.Link>
            <Nav.Link className='header-item dropdown'  href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;