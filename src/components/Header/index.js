import React, { useState } from "react";
import Nav from "../Navigation";

function Header(props) {
  // const [categories] = useState([
  //   { name: "About me" },
  //   { name: "Porfolio" },
  //   {
  //     name: "Contact",
  //   },
  //   {
  //     name: "Resume",
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            🙋🏻‍♀️
          </span>
          Jennifer Nguyen
        </a>
      </h2>
      <Nav />
    </header>
  );
}

export default Header;
