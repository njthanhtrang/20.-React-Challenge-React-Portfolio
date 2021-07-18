import React from "react";
import { IconContext } from "react-icons/lib";
import { FaGithub, FaEnvelope, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <IconContext.Provider value={{ size:"3em", style : { marginLeft: "4rem", marginBottom: "2rem", alignItems:"center"} }}>
    <footer>
      <div>
        <a href="mailto:njthanhtrang@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/njthanhtrang" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/njthanhtrang/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/story/15040375" target="_blank" rel="noreferrer">
          <FaStackOverflow />
        </a>
      </div>
    </footer>
    </IconContext.Provider>
    
  );

}

export default Footer;
