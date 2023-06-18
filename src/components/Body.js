import React, { useState } from 'react';
import '../css/Body.css';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Resume from './Resume';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Body() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home') return (
            <Container fluid className="h-100 d-flex align-items-center justify-content-center middle">
            <Row>
              <Col className='text-center'>
                <h1><span className='greeting'>Hi!</span> I am Lukasz Jurkiewicz</h1>
                <h2>Full Stack Developer</h2>
                <Button href='#about-me'>About me</Button>
              </Col>
            </Row>
        </Container>);
        if(currentPage === 'About') return <About />;
        if(currentPage === 'Portfolio') return <Portfolio />;
        if(currentPage === 'Contact') return <Contact />;
        if(currentPage === 'Resume') return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
};

export default Body;