import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ({ project }) => {
  const { title, description, image, url, repo } = project;

  return (
    <Card className='custom-card'>
      <Card.Img src={image} alt={title} height={250} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text style={{height: '100px'}}>{description}</Card.Text>
        <div className='text-center portfolio-icons'>
            <a href={url}><FontAwesomeIcon icon={faEye} size="2xl" style={{color: "#a8b2d1"}} /></a>
            <a href={repo}><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#a8b2d1"}} /></a>
        </div>
      </Card.Body>
    </Card>
  );
};

const Projects = ({ projects }) => {
  return (
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index}>
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
