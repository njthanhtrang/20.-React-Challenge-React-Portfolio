import React from "react";

function Header(props) {
const { contactSelected, setContactSelected } = props;

  return (
    <header>
        <h2>
            <a href="/">
            Jennifer Nguyen
            </a>
        </h2>
      <nav>
        <ul>
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
