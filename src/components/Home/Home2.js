import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Passionate and driven individual with a solid foundation in Computer Science and a burgeoning interest in Data Analytics. Currently honing my skills in data analysis, I aspire to excel as a Data Analyst, leveraging insights to drive impactful decisions.<br></br>
            <br></br>
            Experience:<br></br>
            <br></br>          
            Proficient in Machine Learning techniques, exploring its applications in real-world scenarios.<br></br>
            Published two research papers focused on Artificial Intelligence, contributing to the evolving landscape of AI.
            <br></br>
            <br></br>
            My journey is fueled by a relentless curiosity and an unwavering commitment to mastering the intricacies of data analysis. Eager to collaborate, learn, and contribute to innovative projects in the realm of data-driven decision-making.
              <br />
              <br />I am fluent in classics like <br></br>
              <i>
                <b className="purple">
                  <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Django</li>
                    <li>Microsoft Azure Cloud</li>
                  </ul>  </b>
              </i>
              <br />
              
              My field of Interest's are: &nbsp; <br />
              <i>
                <b className="purple">Machine Learning and Artificial Intelligence</b><br></br> 
                <b className="purple">
                  Data Analyis and Visualization.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ishaan1212"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishan-sachadeva/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
