import React from 'react';
import { Col,Row } from 'react-bootstrap';
import{
    SiAmazonaws,
    SiMicrosoftazure,
} from 'react-icons/si';

function Future(){
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
          <p>AWS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure/>
          <p>Azure</p>
        </Col>
        </Row>
    );
}

export default Future;