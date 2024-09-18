import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./Research.css"; // Import your CSS file

function ResearchPage() {
  return (
    <Container fluid className="research-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Research Work</strong>
        </h1>
        <p className="intro-text">
          Here are some of the research papers I've worked on.
        </p>
        
        <Row className="research-row">
          <Col md={12} className="research-col">
            <h3 className="research-title">An Analysis on the Performance of Different Categories of CNN Models over COVID-19 Dataset</h3>
            <p className="research-description">
            In recent times, there is an enormous application of machine learning (ML) and deep learning (DL) techniques in various domains. Particularly in the medical domain, DL models must have the potential to aid the medical practitioners for effective decision making. COVID-19 had caused the world to come to a grinding halt nearly 2 years ago when the first case was detected in Wuhan, China. Its ripple effects are still felt to this very day and the problem only seems to be getting worse. Studies show that COVID-19, being a virus, will continue to mutate itself into other forms so long as it isn’t completely eradicated. With RT-PCR reports taking up six hours to three days to show the results, it is the need of the hour to come up with a more efficient method to detect this virus. This paper has two-fold objectives, one is to analyse the effect of Convolutional Neural Networks (CNN) models for detecting COVID-19 and another is to explore and analyse the performance of different classes of CNN over COVID-19 dataset. For this research work, a dataset of a total of 6464 images is curated for the purpose of training the various CNN models which includes 2500 images of Normal, 1464 images of COVID-19 and 2500 images of Pneumonia chest x-rays. Various pretrained models are used and compared based on their accuracies.
            </p>
            <p>
              <a
                href="https://ieeexplore.ieee.org/document/9751823"
                className="research-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong class="purple">Click to view the paper{" "}</strong>
              </a>
              .
            </p>
          </Col>
        </Row>

        <Row className="research-row">
          <Col md={12} className="research-col">
            <h3 className="research-title">Engagement in Video Graphic Online Learning Using the Emotional Dimensions in the Learning Context</h3>
            <p className="research-description">
            The COVID-19 pandemic has become the prime reason for organizations across the world to shift their entire workforce onto virtual platforms. One of the major drawbacks of these virtual platforms is that it lacks a real-time metric which could be used to detect whether a person is attentive during the lectures and meetings or not. This was most evident in the case of educational institutions, where students would often fail to pay attention to the content that was being taught by teachers and professors at home. With this research work, our aim is to create a solution for this problem with the help of AI-FER (Artificial Intelligence Facial Emotion Recognition). For this, we have proposed our own Convolutional Neural Network model achieving an overall accuracy of 59.03%. We have also used several pre-trained models available in Google’s Tensorflow library like DenseNET and VGG.
            </p>
            <p>
            
              <a
                href="https://doi.org/10.1109/ICONAT57137.2023.10080769"
                className="research-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong class="purple">Click to view the paper{" "}</strong>
              </a>
              .
            </p>
          </Col>
        </Row>

        {/* Add more papers similarly */}
      </Container>
    </Container>
  );
}

export default ResearchPage;
