import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.JPG";

function About() {
  return (
    <section className="col-10">
      <h1 id="about">About me</h1>
      <img
        src={PortfolioImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="cover"
      ></img>
      <h6 style={{ width: "40%", justifyContent: "center" }} id="about">
        Hi there! My name is Jennifer and I'm a full-stack software engineer. I
        graduated from UC Berkeley Extension's Web Development Bootcamp, which
        equipped me with a strong foundation in object-oriented programming of progressive web
        applications using the MongoDB, Express, React and Node.js (MERN)
        JavaScript stack. Inspired by my background in medical sciences, I hope
        to alleviate the need for ease of use and access to medical resources,
        and create patient-focused applications that connect and encourage
        people to live happier, more health-minded lifestyles. I'd be happy to connect and innovate with the user in mind*✧･ﾟ:
      </h6>
    </section>
  );
}

export default About;
