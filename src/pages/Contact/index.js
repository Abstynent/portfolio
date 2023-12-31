import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../../components/ContactForm';
import avatar from '../../assets/img/contact-me.png';

export default function Contact() {
    return (
        <Container>
            <Row className='custom-container'>
                <Col md={4} className='avatar-col'>
                    <img src={avatar} alt='Avatar' className='avatar-img' />
                </Col>

                <Col md={8} className='contact-col'>
                    <ContactForm />
                </Col>
            </Row>

            {/* <Row className='custom-container'>
                <Col md={3} className='contact-col'>
                    <a href='mailto:luk.jur@outlook.com'>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            size='2xl'
                            style={{ color: '#a8b2d1' }}
                            className='icon'
                        />
                    </a>
                </Col>

                <Col md={3} className='contact-col'>
                    <a href='tel:+447575747044'>
                        <FontAwesomeIcon
                            icon={faPhone}
                            size='2xl'
                            style={{ color: '#a8b2d1' }}
                            className='icon'
                        />
                    </a>
                </Col>

                <Col md={3} className='contact-col'>
                    <a href='https://github.com/Abstynent'>
                        <FontAwesomeIcon
                            icon={faGithub}
                            size='2xl'
                            style={{ color: '#a8b2d1' }}
                            className='icon'
                        />
                    </a>
                </Col>

                <Col md={3} className='contact-col'>
                    <a href='https://www.linkedin.com/in/lukasz-j-117643259/'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size='2xl'
                            style={{ color: '#a8b2d1' }}
                            className='icon'
                        />
                    </a>
                </Col>
            </Row> */}
        </Container>
    );
}
