import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import avatar from '../../assets/img/resume.png';

const Resume = () => {
  const downloadCV = (event) => {
    event.preventDefault();
    const cvPath = '/assets/files/resume.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <Container>
      <Row className="justify-content-center custom-container">
        <Col md={3} className='avatar-col'>
          <img src={avatar} alt='Avatar' className='avatar-img' />
        </Col>

        <Col xs={12} sm={6} className="text-center mt-4">
          <h1 className="mb-4">My resume</h1>
          <div className="d-flex justify-content-center">
            <Button className='mt-4 mb-3' variant="" onClick={downloadCV}>
              <FontAwesomeIcon icon={faFileArrowDown} size="6x" style={{color: "a8b2d1",}}/>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;