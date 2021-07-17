import React from "react";
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"

function Footer() {

  return (
    
    <footer>
        <a href="njthanhtrang@gmail.com" className="fa-solid fa-envelope">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
    </footer>
  );
}

export default Footer;
