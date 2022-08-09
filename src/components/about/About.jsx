import React from 'react';
import './about.css'
import AboutMe from "./AboutMe";

const About = () => {
  return (
    <section id="about" className="about">
      <h5 className="about-title">Get To Know</h5>
      <h2 className="about-title">About Me</h2>

      <div className="container about__container">

        <div className="about--me">
          <div className="about--me-image">
            <div className="image-holder">
              <img src={require('../../image/MeAbout2.webp')} alt="me"/>
            </div>
          </div>
        </div>

        <AboutMe/>
      </div>
    </section>
  );
};

export default About;
