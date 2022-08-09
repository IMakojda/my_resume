import React from 'react';
import { BsAward, BsFolder2 } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="about-content">

      <div className="about-cards-holder">

        <article className="cards">
          <BsAward className="about-icon"/>
          <h5>
            Experience
          </h5>
        </article>

        <article className="cards">
          <BsFolder2 className="about-icon"/>
          <h5>
            Projects
          </h5>
        </article>

      </div>

      <p>
        Hello everyone, I am a beginner in this field,
        I want to change my life and work in the IT field,
        as this has been of interest to me for a long time. About myself,
        I will say:  I am cheerful , stress-resistant, responsible, cooperative.
        I like to work in a friendly team, learn quickly.
        I want to learn and believe that it is never too late to learn and change something.
        Has successfully completed course GO IT - Full stack Developer.
      </p>
      <a href="#contacts" className="btn">
        Let`s Talk
      </a>
    </div>
  );
};

export default AboutMe;
