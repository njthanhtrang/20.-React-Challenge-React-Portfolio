// child component of Gallery component handles photo rendering logic
import React, { useState } from "react";

// props.category passed down from Gallery as currentCategory.name
// destructure category from props
const PhotoList = ({ category }) => {
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Weather or Not",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Family Financials",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "BrewMap 3.0",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Budget Tracker",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Tech Blog",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Note Taker",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Weather Dashboard",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Work Day Scheduler",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  //   only photos with selected category appear
  // go through each photo in photos array, find every one matching category selected by user
  // if photo matches, returned in arr, assigned to currentPhotos
  // map currentPhotos array, render each photo that matches category selected by user
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
        {/* only renders if isModalOpen is true, Modal changes state isModalOpen using closures */}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            //   incremental naming of images using i
            src={require(`../../assets/small/${category}/${i}.jpg`)}
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

export default PhotoList;
