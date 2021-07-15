import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpeg"

function About() {
    return(
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={PortfolioImage} className="my-2" style={{ width: "40%" }} alt="cover" ></img>
        </section>
    );
}

export default About;