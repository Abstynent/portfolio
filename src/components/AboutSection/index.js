import React from "react";
import { Col } from 'react-bootstrap';
const aboutMeText = `
Hello, I'm Lukasz!
Passionate and driven full-stack developer with a proven track record of expertise across a diverse spectrum of technologies. My primary objective is to craft extraordinary web applications that provide flawless user experiences. Through my comprehensive full-stack developer program at the University of Birmingham, I've honed hands-on proficiency with a wide array of cutting-edge technologies. I excel within collaborative team settings, leveraging my robust technical acumen to make impactful contributions to projects while consistently delivering innovative resolutions to intricate challenges.
`
export default function AboutSection() {
    return (
        <Col md={9} className='content-col'>
            <div className="d-flex align-items-center h-100">
                <div>
                    <h1>About me</h1>
                    <p style={{ textAlign: 'left' }}>{aboutMeText}</p>
                </div>
            </div>
        </Col>
    );
};