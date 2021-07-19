// child component of Gallery component handles photo rendering logic
import React from "react";

const Projects = ({ singleProject }) => {
  return (
    <div key={singleProject.title}>
      <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>

      <div className="flex-row card card-body" style={{ width: "35rem", marginBottom: "2rem", backgroundColor: "#a2c7e5", fontSize: "20px" }}>
        <a href={singleProject.deployedLink}>{singleProject.title}</a>

        <img
          src={singleProject.image}
          alt={singleProject.title}
          className="img-thumbnail mx-1"
        />
        <a href={singleProject.github} className="card-text">
          GitHub Link
        </a>
      </div>
      </div>
    </div>
  );
};

export default Projects;
