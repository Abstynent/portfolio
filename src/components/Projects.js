import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ({ project }) => {
  const { title, description, image, url, repo } = project;

  return (
    <Card>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={url}><FontAwesomeIcon icon={faEye} size="2xl" style={{color: "#000000",}} /></a>
        <a href={repo}><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000",}} /></a>
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
