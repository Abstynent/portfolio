import React, { useState } from 'react';
import '../styles/Body.css';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Resume from './Resume';

import { Container } from 'react-bootstrap';

function Body() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if(currentPage === 'Home') return <Home />;
        if(currentPage === 'About') return <About />;
        if(currentPage === 'Portfolio') return <Portfolio />;
        if(currentPage === 'Contact') return <Contact />;
        if(currentPage === 'Resume') return <Resume />
    };


    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <Container fluid className="bg-img h-100 d-flex align-items-center justify-content-center middle">
                {renderPage()}
            </Container>
        </div>
    );
};

export default Body;