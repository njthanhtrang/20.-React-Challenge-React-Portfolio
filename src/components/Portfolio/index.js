// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Project";
// import brewmap from "../../assets/img/brewmap.jpeg";
import weatherornot from "../../assets/img/weatherornot.png";
import famfin from "../../assets/img/famfin.png";
import brewmap from "../../assets/img/brewmap.jpeg";
import budgettracker from "../../assets/img/budgettracker.png";
import techblog from "../../assets/img/techblog.png";
import notetaker from "../../assets/img/notetaker.png";
import weatherdashboard from "../../assets/img/weatherdashboard.png";
import workdayscheduler from "../../assets/img/workdayscheduler.png";


const Portfolio = (singleProject) => {

  const projectList = [
    {
      title: "Weather or Not",
      image: weatherornot,
      deployedLink: "https://kingkevin05.github.io/weather-or-not/",
      github: "https://github.com/njthanhtrang/weather-or-not",
    },
    {
      title: "Family Financials",
      image: famfin,
      deployedLink: "http://familyfinancials.herokuapp.com/",
      github: "https://github.com/njthanhtrang/famfin",
    },
    {
      title: "BrewMap 3.0",
      image: brewmap,
      deployedLink: "https://brewmap3.herokuapp.com/",
      github: "https://github.com/njthanhtrang/BrewMaps-3",
    },
    {
      title: "Budget Tracker",
      image: budgettracker,
      deployedLink: "https://budgettracker302.herokuapp.com/",
      github: "https://github.com/njthanhtrang/19.-Progressive-Web-Applications-PWA-Challenge-Budget-Tracker",
    },
    {
      title: "Tech Blog",
      image: techblog,
      deployedLink: "https://techblog302.herokuapp.com/",
      github: "https://github.com/njthanhtrang/14.-Model-View-Controller-MVC-Challenge-Tech-Blog",
    },
    {
      title: "Note Taker",
      image: notetaker,
      deployedLink: "http://notetaker302.herokuapp.com/",
      github: "https://github.com/njthanhtrang/11.-Express.js-Challenge-Note-Taker",
    },
    {
      title: "Weather Dashboard",
      image: weatherdashboard,
      deployedLink: "https://njthanhtrang.github.io/6.-Server-Side-APIs-Challenge-Weather-Dashboard/",
      github: "https://github.com/njthanhtrang/6.-Server-Side-APIs-Challenge-Weather-Dashboard",
    },
    {
      title: "Work Day Scheduler",
      image: workdayscheduler,
      deployedLink: "https://njthanhtrang.github.io/5.-Third-Party-APIs-Challenge-Work-Day-Scheduler/",
      github: "https://github.com/njthanhtrang/5.-Third-Party-APIs-Challenge-Work-Day-Scheduler",
    },
];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
          <h1>Projects</h1>
          <br></br>
        {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
