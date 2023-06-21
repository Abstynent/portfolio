import React from "react";
import { Col } from 'react-bootstrap';

export default function AboutSection() {
    return (
        <Col md={9} className='content-col'>
                    <h1>wookash</h1>
                    <p>I'm Lukasz, a passionate and highly skilled full stack developer. 
                        My expertise lies in creating innovative and efficient web applications. 
                        With a comprehensive understanding of both front-end and back-end development, 
                        I'm proficient in a variety of programming languages, frameworks, and technologies. 
                        I thrive on solving complex problems and pay meticulous attention to detail when designing
                        and implementing robust solutions that cater to the needs of clients and end-users. 
                        Collaborative environments are where I shine, as I possess excellent teamwork skills and effective communication abilities.
                        I continuously stay up-to-date with the latest industry trends and best practices, 
                        ensuring that I deliver top-quality results. I'm driven by a commitment to excellence and strive to exceed expectations in all my work.</p>
                        
                    <h2>Skills:</h2>
                        <ul className='skills'>
                        <li>JavaScript: Proficient in using JavaScript for developing dynamic and interactive web applications.</li>
                        <li>HTML: Experienced in crafting well-structured and semantic web pages using HTML.</li>
                        <li>CSS: Skilled in creating visually appealing and responsive designs with CSS.</li>
                        <li>Express.js: Experienced in building server-side applications using the Express.js framework.</li>
                        <li>MySQL: Proficient in working with MySQL for structured data storage and retrieval.</li>
                        <li>NoSQL (MongoDB): Knowledgeable in handling unstructured data using MongoDB as a NoSQL database.</li>
                        <li>React: Proficient in building dynamic and scalable user interfaces with React.</li>
                        <li>GraphQL: Experienced in efficient data querying and manipulation using GraphQL.</li>
                        <li>Node.js: Skilled in server-side development and leveraging JavaScript with Node.js.</li>
                        <li>RESTful API: Experienced in building RESTful APIs for seamless client-server communication.</li>
                        <li>Progressive Web Applications (PWA): Skilled in developing web applications that provide native-like experiences to users.</li>
                        <li>MERN Stack: Proficient in utilizing the MERN stack (MongoDB, Express.js, React, Node.js) for full stack development.</li>
                        </ul>
                </Col>
    );
};