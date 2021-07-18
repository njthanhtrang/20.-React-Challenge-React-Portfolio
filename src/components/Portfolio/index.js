// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Projects";
// import brewmap from "../../assets/img/brewmap.jpeg";
import weatherornot from "../../assets/img/weatherornot.png";


const Portfolio = () => {

  const projectList = [
    {
      title: "Weather or Not",
      image: weatherornot,
      deployedLink: "https://kingkevin05.github.io/weather-or-not/",
      github: "https://github.com/njthanhtrang/weather-or-not",
    },
    // {
    //   title: "Family Financials",
    // },
    // {
    //   title: "BrewMap 3.0",
    // },
    // {
    //   title: "Budget Tracker",
    // },
    // {
    //   title: "Tech Blog",
    // },
    // {
    //   title: "Note Taker",
    // },
    // {
    //   title: "Weather Dashboard",
    // },
    // {
    //   title: "Work Day Scheduler",
    // },
];

  return (
    <div>
      <div className="flex-row">
          <h1>Projects</h1>
        {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
