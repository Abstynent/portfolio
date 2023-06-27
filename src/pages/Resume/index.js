import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

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
          <img src='/assets/img/resume.png' alt='Avatar' className='avatar-img' />
        </Col>

        <Col xs={12} sm={6} className="text-center mt-4">
          <h1 className="mb-4">My resume</h1>
          <div className="d-flex justify-content-center">
            <Button variant="link" onClick={downloadCV}>
              <FontAwesomeIcon icon={faFileArrowDown} size="6x" />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;