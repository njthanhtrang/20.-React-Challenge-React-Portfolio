import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setPage, currentPage } = props;

  return (
    <header>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a href="#resume">
              Resume
            </a>
          </li> */}
          {/* when map over anything in JSX, outermost element must have key attribute */}
          {/* and return only a single JSX element */}
          {categories.map((category) => (
            // SHORT CIRCUIT EXPRESSSION
            // as long as ${currentCategory.name === category.name, navActive will be returned
            <li
              className={`mx-1 ${
                currentPage.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              {/* callback fx declaration to selectively render, not auto */}
              <span
                onClick={() => {
                  setPage(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
