// child component of Gallery component handles photo rendering logic
import React from "react";

const Project = ({ singleProject }) => {

  return (
    <div>
      <div className="flex-row">
      <a href={singleProject.deployedLink}>{singleProject.title}</a>
      <a href={singleProject.github}>GitHub repo</a>
      <hr></hr>
          <img
            src={singleProject.image}
            alt={singleProject.title}
            className="img-thumbnail mx-1"
            // // NEED key value, a unique string
            key={singleProject.title}
          />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Project;
