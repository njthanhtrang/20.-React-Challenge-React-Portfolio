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
  const [page, setPage] = useState("About me");

  const [categories] = useState([
    { name: "About me" },
    { name: "Porfolio" },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const currentPage = () => {
    switch (page) {
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
      <Header 
      categories={categories}
      page={page}
      setPage={setPage}
      ></Header>
      <main>
        <div>{currentPage(page)}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
