import React from 'react';
import './style.css';

import { Container, Row, Col } from 'react-bootstrap';
import AboutSection from '../../components/AboutSection';
import avatar from '../../assets/img/avatar.png';
export default function About() {
    return (
        <Container>
            <Row className='custom-container'>
                <Col md={3} className='avatar-col'>
                    <img
                        src={avatar}
                        alt='Avatar'
                        className='avatar-img'
                    />
                </Col>
                <AboutSection />
            </Row>
        </Container>
    )
}