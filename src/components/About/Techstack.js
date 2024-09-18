import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,    // Python
  DiJava,
  DiDatabase,
  DiJavascript1, // JavaScript
  DiReact,      // React.js
  DiNodejs,     // Node.js
  DiMongodb,    // MongoDB
  DiGit,        // Git
} from 'react-icons/di';
import {
  // SiJava,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
        <p>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>GIT</p>
      </Col>
    </Row>
  );
}

export default Techstack;
