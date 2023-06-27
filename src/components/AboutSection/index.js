import React from "react";
import { Col } from 'react-bootstrap';
const aboutMeText = `
Hello, I'm Lukasz!
I am a passionate full-stack developer with expertise in a range of technologies, including JavaScript, CSS, HTML, React, Express.js, Node.js, MySQL, NoSQL, and the MERN stack. My goal is to create exceptional web applications that deliver seamless user experiences.
During my full-stack developer course at the University of Birmingham, I have gained hands-on experience working with these technologies. I have built interactive and responsive user interfaces using HTML, CSS, and JavaScript, leveraging the power of React for dynamic front-end development.
On the back-end, I have a strong foundation in Express.js and Node.js, enabling me to build robust server-side applications. I have used Express.js to create APIs, handle routing, and manage server-side logic. Node.js has allowed me to build scalable and efficient server-side applications, leveraging its event-driven architecture.
Database management is another area of expertise, as I have worked extensively with both relational databases like MySQL and non-relational databases like NoSQL. I have designed and optimized database schemas, written complex queries, and ensured data integrity.
I am committed to continuous learning, staying updated with the latest industry trends and best practices. I actively seek new technologies and frameworks to expand my skill set and tackle new challenges.
Collaboration and problem-solving are fundamental aspects of my approach. I thrive in team environments, leveraging my technical skills to contribute to projects and finding innovative solutions to complex problems.
Thank you for visiting my portfolio. I am excited about the potential to apply my skills and contribute to impactful projects. If you have any questions or would like to discuss potential collaborations, I would be delighted to connect with you.

`
export default function AboutSection() {
    return (
        <Col md={9} className='content-col'>
            <h1>About me</h1>
            <p style={{ textAlign: 'left' }}>{aboutMeText}</p>
        </Col>
    );
};