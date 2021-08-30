import React from "react";
// updated resume with material advisor feedback
// import resumePDF from "../../assets/resumePDF.pdf";
import DevResume from "../../assets/DevResume.pdf";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
  FaReact,
  FaNpm,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiRedux,
  SiReactrouter,
  SiGraphql,
} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <Container className="container my-5">
      <Row>
        <Col>
          <a href={DevResume} target="_blank" rel="noreferrer">
            <h3>View my resume here!</h3>
          </a>
          <br></br>
          <h3>Technical Skills:</h3>
          <h3>
          • GitHub <FaGithub /></h3>
          <h3>• Git <FaGitAlt /></h3>
          <h3>• Heroku <SiHeroku /></h3>
          <h3>• Webpack <SiWebpack /></h3>
        </Col>

        <Col>
          <h3 id="resume">Front-end Proficiencies:</h3>
          <br></br>
          <h3>
            • HTML
            <FaHtml5 />
          </h3>
          <h3>
            • CSS
            <FaCss3Alt />
          </h3>
          <h3>
            • JavaScript
            <FaJsSquare />
          </h3>
          <h3>
            • jQuery
            <DiJqueryLogo />
          </h3>
          <h3>• Responsive design</h3>
          <h3>
            • React
            <FaReact /> <SiReactrouter /> <SiRedux />
          </h3>
          <h3>
            • Boostrap
            <FaBootstrap />
          </h3>
        </Col>

        <Col>
          <h3 id="resume">Back-end Proficiencies:</h3>
          <br></br>
          <h3>• APIs</h3>
          <h3>
            • Node
            <FaNode /> <FaNpm />
          </h3>
          <h3>• Express</h3>
          <h3>
            • MySQL, Sequelize <SiMysql />
          </h3>
          <h3>
            • MongoDB, Mongoose
            <DiMongodb />
          </h3>
          <h3>• REST</h3>
          <h3>
            • GraphQL
            <SiGraphql />
          </h3>
        </Col>
      </Row>

      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
    </Container>
  );
}

export default Resume;
