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
      title: "Weather-or-Not",
      summary: "Activity recommender based on the searched city’s location and current weather conditions. Integrates the Open Weather Map API with Eventbrite events in the area to provide indoor or outdoor activity suggestions.",
      image: weatherornot,
      technologies: "Node.js, JavaScript, OpenWeatherMap API, EventBrite API, MD Bootstrap, GitHub Pages, server-side APIs, localStorage",
      deployedLink: "https://kingkevin05.github.io/weather-or-not/",
      github: "https://github.com/njthanhtrang/weather-or-not",
    },
    {
      title: "Family Financials",
      summary: "Investment teaching tool that allows family members to pool funds and purchase stocks together. Uses an MVC folder structure and express-session & cookies authentication, environment variables to store API keys and sensitive information.",
      image: famfin,
      technologies: "JavaScript, Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Heroku, UIKit",
      deployedLink: "http://familyfinancials.herokuapp.com/",
      github: "https://github.com/njthanhtrang/famfin",
    },
    {
      title: "BrewMap 3.0",
      summary: "Brewery locator and blog using OpenBreweryDB API and BingMaps. Users can sign up, sign in, search breweries in a specified city, favorite and unfavorite breweries to their profiles, and post and comment on the BrewMap blog.",
      image: brewmap,
      technologies: "JavaScript, NoSQL, React single-page application, GraphQL API, Node.js, Express.js, MongoDB, Mongoose ODM, authentication, Heroku, JWT authentication, Bulma",
      deployedLink: "https://brewmap3.herokuapp.com/",
      github: "https://github.com/njthanhtrang/BrewMaps-3",
    },
    {
      title: "Budget Tracker",
      summary: "Modified budget tracker application that allows offline access and functionality for tracking expenses and deposits to a user's finances.",
      image: budgettracker,
      technologies: "JavaScript, IndexedDB, service workers, Express.js, web manifest, MongoDB, Mongoose ODM, Heroku",
      deployedLink: "https://budgettracker302.herokuapp.com/",
      github: "https://github.com/njthanhtrang/19.-Progressive-Web-Applications-PWA-Challenge-Budget-Tracker",
    },
    {
      title: "Tech Blog",
      summary: "CMS-style blog site that allows users to publish articles and blog posts and the latest technologies and comment on other developers' posts.",
      image: techblog,
      technologies: "JavaScript, Handlebars.js, Express.js, MySQL2, Sequelize, dotenv, Node bcrypt.js, express-session cookies, connect-session-sequelize",
      deployedLink: "https://techblog302.herokuapp.com/",
      github: "https://github.com/njthanhtrang/14.-Model-View-Controller-MVC-Challenge-Tech-Blog",
    },
    {
      title: "Note Taker",
      summary: "Note-taking application uses an Express.js back-end and saves and retrieves note data from a JSON file.",
      image: notetaker,
      technologies: "JavaScript, Express.js, Heroku, fs module, NPM uuid package",
      deployedLink: "http://notetaker302.herokuapp.com/",
      github: "https://github.com/njthanhtrang/11.-Express.js-Challenge-Note-Taker",
    },
    {
      title: "Weather Dashboard",
      summary: "​This application allows travelers to plan their trips according to the weather forecast by providing the weather outlook for multiple cities. Retrieves weather data from the OpenWeather One Call API.",
      image: weatherdashboard,
      technologies: "JavaScript, OpenWeatherMap API, localStorage",
      deployedLink: "https://njthanhtrang.github.io/6.-Server-Side-APIs-Challenge-Weather-Dashboard/",
      github: "https://github.com/njthanhtrang/6.-Server-Side-APIs-Challenge-Weather-Dashboard",
    },
    {
      title: "Work Day Scheduler",
      summary: "A daily planner that can help with users' time management. Stores events by the hour and displays specific time blocks for standard business hours color-coded to indicate whether a time block is in the past, present or future.",
      image: workdayscheduler,
      technologies: "JavaScript, localStorage, jQuery, Moment.js",
      deployedLink: "https://njthanhtrang.github.io/5.-Third-Party-APIs-Challenge-Work-Day-Scheduler/",
      github: "https://github.com/njthanhtrang/5.-Third-Party-APIs-Challenge-Work-Day-Scheduler",
    },
];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
          {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
