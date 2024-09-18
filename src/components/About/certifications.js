import React from 'react';
import { Card, Col,Row } from 'react-bootstrap';
import Azure from '../../Assets/azure.png';
import IBM from '../../Assets/IBM.png';

const certifications = [
    {
      title: "Microsoft Certified Azure Fundamentals",
      imgPath: Azure,  
      description: "Gained foundational knowledge of core Azure services and management tools.",
    },
    {
      title: "IBM Data Analysis and Visual Foundations",
      imgPath: IBM,
      description: "Learned effective data analysis techniques focusing on tools like IBM Congnos"
    },
  ];

function Certifications(){
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {certifications.map((cert, index) => (
        <Col md={4} key={index} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={cert.imgPath} alt={cert.title} />
            <Card.Body>
              <Card.Title>{cert.title}</Card.Title>
              <Card.Text>{cert.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    );
}

export default Certifications;