// child component of Gallery component handles photo rendering logic
import React from "react";
import Card from "react-bootstrap";

const Projects = ({ singleProject }) => {
  return (
    <div key={singleProject.title}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>

      <div className="flex-row card card-body" style={{ width: "35rem" }}>
        <a href={singleProject.deployedLink}>{singleProject.title}</a>

        <img
          src={singleProject.image}
          alt={singleProject.title}
          className="img-thumbnail mx-1"
          // // NEED key value, a unique string
          key={singleProject.title}
        />
        <a href={singleProject.github} className="card-text">
          GitHub Link
        </a>
      </div>
    </div>
  );
};

export default Projects;
