import React from "react";

import { Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <Row>
          <Col className='typewriter text-center'>
            <h1><span className='greeting'>Hi!</span></h1>
            <h2>I'm Lukasz Jurkiewicz</h2>
            <h2>Full Stack Developer</h2>
            {/* <button className='btn-custom'>About me <FontAwesomeIcon icon={faArrowRight} /></button> */}
          </Col>
        </Row>
    );
};

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//       document.querySelector(".btn-custom").style.opacity = 1;
//     }, 3900);
//   });