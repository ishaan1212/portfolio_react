import React from 'react';
import { Col,Row } from 'react-bootstrap';
import {
    SiDjango,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiKeras,
    SiOpencv,
    SiNumpy,
    SiPandas,
} from 'react-icons/si';

function Frameworks(){
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango />
          <p>Django</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow />
          <p>TensorFlow</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch />
          <p>PyTorch</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn />
          <p>Scikit-Learn</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKeras />
          <p>Keras</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOpencv />
          <p>OpenCV</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy />
          <p>NumPy</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
          <p>Pandas</p>
        </Col>
        </Row>
    );
}

export default Frameworks;
