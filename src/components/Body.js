import React, { useState } from 'react';
import '../styles/Body.css';
import Header from './Header';
import Footer from './Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

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
            <Footer />
        </div>
    );
};

export default Body;