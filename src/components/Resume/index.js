import React from "react";
import resumePDF from "../../assets/resumePDF.pdf";

function Resume() {
  return (
    <section className="my-5">
       <a href={resumePDF} target="_blank" rel="noreferrer">
        <h3>View my resume here!</h3>
      </a>
      <h1 id="resume">Front-end Proficiencies</h1>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>Responsive design</li>
      <li>React</li>
      <li>Boostrap</li>
      <h1 id="resume">Back-end Proficiencies</h1>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySQL, Sequelize</li>
      <li>MongoDB, Mongoose</li>
      <li>REST</li>
      <li>GraphQL</li>
    </section>
  );
}

export default Resume;
