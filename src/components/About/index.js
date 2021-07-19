import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpeg"

function About() {
    return(
        <section className="my-5">
            <h1 id="about">About me</h1>
            <img src={PortfolioImage} className="my-2" style={{ width: "20%" }} alt="cover" ></img>
            <h6 style={{ width: "40%", justifyContent: "center" }} id="about">Hi there! My name is Jennifer and I'm a web developer with a backgorund in medical sciences. I'm inspired by the need for greater ease of use and access to medical resources, and hope to create patient-focused applications that will connect and encourage people to live happier, more health-minded lifestyles. Thanks for visiting, and I hope to connect with you soon!</h6>
        </section>
    );
}

export default About;