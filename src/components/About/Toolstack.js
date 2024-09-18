import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJira,
  SiPowerbi,
  SiTableau,
  SiAnaconda,
  SiJupyter,
  // SiPostman,
 
} from "react-icons/si";
import { FaGithub } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi'; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VS-Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiTask />
        <p>Kanban</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p>Microsoft PowerBi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <p>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <p>Anaconda</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p>Jupyter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p>Github</p>
      </Col>
    </Row>
  );
}


export default Toolstack;
