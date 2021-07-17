import React from "react";
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"

function Footer() {

  return (
    
    <footer>
        <a href="/" className="fa-solid fa-envelope">
          Jennifer Nguyen
        </a>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
    </footer>
  );
}

export default Footer;
