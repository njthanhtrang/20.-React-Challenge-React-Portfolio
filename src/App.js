import React, { useState } from "react";
import Nav from "./components/Navigation";
import About from "./components/About";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// root component (wraps other components)
function App() {
  // initial value of contactSelected is false, prevent ContactForm from showing initially
  // Gallery and About displays instead
  const [categorySelected, setCategorySelected] = useState("About me");

  const [categories] = useState([
    {
      name: "About me",
    },
    { name: "Porfolio" },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const currentPage = () => {
    switch (categorySelected) {
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      </Header>
      <main>
        <div>{currentPage(categorySelected)}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
