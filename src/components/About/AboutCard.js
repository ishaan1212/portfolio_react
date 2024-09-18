import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ishan Sachadeva </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            <br />
            I am currently pursuing <span className="purple">Master's in Applied Computing</span> from <span className="purple">University of Windsor</span>
            <br /><br />
            I have completed my <span className="purple">Bachelor's in Computer Science and Engineering</span> from <span className="purple">SRM Institute of Science and Technology.</span>
            <br />
            <br />
            Keeping code on one side, I also take pleasure in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
