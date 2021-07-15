import React, { useState } from "react";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import './App.css';

// root component (wraps other components) 
function App() {
  // initial value of contactSelected is false, prevent ContactForm from showing initially
  // Gallery and About displays instead
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      // key is often parentheses
      name: "About me",
      description:
        "Hi, my name is Jennifer and I am a junior developer with a background in the health sciences.",
    },
    { name: "Porfolio", description: "Snapshots of my work, take a look!" },
    { name: "Contact", description: "I will try my best to contact you within 24 hours." },
    {
      name: "Resume",
      description: "Full-stack proficiencies",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">

        <About></About>

    </div>
  );
}

export default App;
