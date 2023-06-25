import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ href, icon }) => (
  <a href={href}>
    <FontAwesomeIcon icon={icon} className="icon" style={{color: "#a8b2d1"}} />
  </a>
);

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container className="footer-content">
        <p>&copy; 2023 Lukasz Jurkiewicz <SocialLink href="https://github.com/Abstynent" icon={faGithub} /> <SocialLink href="https://twitter.com/woo4ash" icon={faTwitter} /> <SocialLink href="https://linkedin.com/in/yourprofile" icon={faLinkedin} /></p>
      </Container>
    </footer>
  );
};

export default Footer;
