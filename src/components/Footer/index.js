import React from "react";
import { IconContext } from "react-icons/lib";
import { FaGithub, FaEnvelope, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container >
    <IconContext.Provider value={{ size:"3em"}}>
    <footer>
      <Row>
      <Col md={{ span: 4, offset: 10 }}>
        <a href="mailto:njthanhtrang@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/njthanhtrang" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/njthanhtrang/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/story/15040375" target="_blank" rel="noreferrer">
          <FaStackOverflow />
        </a>
        </Col>
      </Row>
    </footer>
    </IconContext.Provider>
    </Container>
    
  );

}

export default Footer;
