import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../styles/Header.css';

const title = "wookashPortfolio";

function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-bg-custom">
      <Container>
        <Navbar.Brand className='header-item' href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
            className='header-item dropdown hover-underline-animation' 
            href="#home"
            onClick={() => handlePageChange('About')}
            >
              About Me
            </Nav.Link>

            <Nav.Link 
            className='header-item dropdown hover-underline-animation' 
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link 
            className='header-item dropdown hover-underline-animation' 
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
            className='header-item dropdown hover-underline-animation' 
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;