import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Import images
import adhd from "../../Assets/Projects/adhd.jpg"
import ecohire from "../../Assets/Projects/ecohire.jpeg"
import snapfit from "../../Assets/Projects/snapfit.png"
import object from "../../Assets/Projects/object.jpg"
import covid from "../../Assets/Projects/COVID AI.jpg"
import custom from "../../Assets/Projects/custom.png"

// Project data
const projects = [
  {
    title: "ADHD Women Health Tracker",
    imgPath: adhd,
    description: "Interactive dashboard for women suffering from ADHD symptoms and health problems",
    techStack: ["MongoDb", "JavaScript"],
    ghLink: "https://github.com/madhavanvaidya/adhshe",
  },
  {
    title: "Eco-Hire",
    imgPath: ecohire,
    description: "Web-based green job seeking platform to encouraging eco-conscious employment",
    techStack: ["Python", "Django"],
    ghLink: "https://github.com/ishaan1212/EcoHire",
  },
  {
    title: "SnapFit",
    imgPath: snapfit,
    description: "Calorie counting app to overcome problem of both malnutrition and overnutrition",
    techStack: ["Python", "Tensorflow", "Flask"],
    ghLink: "https://github.com/ishaan1212/Snap-Fit/tree/master",
  },
  {
    title: "Object Detection for Visually Impaired People",
    imgPath: object,
    description: "Object Detection using CNN and OpenCV along with auditory feedback",
    techStack: ["Python", "Tensorflow","Keras", "OpenCV", "Machine Learning"],
    ghLink: "https://github.com/ishaan1212/Object_Detection",
  },
  {
    title: "Analysing CNN models on Covid19 dataset",
    imgPath: covid,
    description: "Covid19 detection using Chest-Xrays through different CNN models",
    techStack: ["Python", "Tensorflow", "PyTorch", "Keras"],
    ghLink: "https://github.com/ishaan1212/Analyzing_CNN_Models_onCOVID19",
  },
  {
    title: "Custom Bash Terminal",
    imgPath: custom,
    description: "Custom Bash terminal implemented in C for Linux providing some fundamemtal shell functionalities",
    techStack: ["C","Linux","Shell Scripting"],
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
  },
];

// Available tech stacks
const techStacks = ["All", "Python","Django","JavaScript","C","Linux","Shell Scripting","PyTorch", "Keras", "Tensorflow", "MongoDb"];

function Projects() {
  const [selectedStack, setSelectedStack] = useState("All");

  // Filter projects based on selected tech stack
  const filteredProjects = selectedStack === "All"
    ? projects
    : projects.filter((project) => project.techStack.includes(selectedStack));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <p><strong className="purple">You can filter it based on the technoogies given</strong></p>

        {/* Tech Stack Filter */}
        <ButtonGroup className="mb-4">
          {techStacks.map((stack) => (
            <Button
              key={stack}
              variant={stack === selectedStack ? "primary" : "outline-primary"}
              onClick={() => setSelectedStack(stack)}
            >
              {stack}
            </Button>
          ))}
        </ButtonGroup>

        {/* Display filtered projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects