// child component of Gallery component handles photo rendering logic
import React, { useState } from "react";

const ProjectList = () => {

  const [photos] = useState([
    {
      name: "Weather or Not",
    },
    {
      name: "Family Financials",
    },
    {
      name: "BrewMap 3.0",
    },
    {
      name: "Budget Tracker",
    },
    {
      name: "Tech Blog",
    },
    {
      name: "Note Taker",
    },
    {
      name: "Weather Dashboard",
    },
    {
      name: "Work Day Scheduler",
    },
  ]);

  return (
    <div>
        {/* only renders if isModalOpen is true, Modal changes state isModalOpen using closures */}
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            //   incremental naming of images using i
            // src={require(`../../assets/small/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            // NEED key value, a unique string
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
