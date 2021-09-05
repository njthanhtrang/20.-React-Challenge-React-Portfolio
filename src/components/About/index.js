import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.JPG";
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

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={PortfolioImage}
            className="my-2"
            style={{ width: "60%" }}
            alt="cover"
          ></img>
        </div>
        <div className="col-6">
          <h1 id="about">About me</h1>
          <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
            Hi! My name is Jennifer and I'm a full-stack software engineer,
            leveraging background in clinical healthcare. I am a graduate of UC
            Berkeley Extension's Web Development Bootcamp, which provided me a
            strong foundation in object-oriented programming of progressive web
            applications using the MongoDB, Express, React and Node.js (MERN)
            JavaScript stack. In my previous role working with patients in
            opthalmology, I was responsible for addressing their concerns with
            care and efficiency. Because of this, I am effective at combining
            creativity, problem solving, and empathy to develop user-friendly
            applications.
            <br></br>
            <br></br>I'm now inspired by the need for greater ease of use and
            access to medical resources, and hope to create patient-focused
            applications that will connect and encourage people to live happier,
            more health-minded lifestyles. Let's connect and innovate with the user in mind!
          </h6>
          <br></br>
          <br></br>
          <br></br>
          <h4>Technical Skills:</h4>
          <h2>
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <DiJqueryLogo />
            <FaReact />
            <SiRedux />
            <FaBootstrap />
            <FaNode />
            <SiMysql />
            <DiMongodb />
            <SiGraphql />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
