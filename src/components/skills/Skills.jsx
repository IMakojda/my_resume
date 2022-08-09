import React from 'react';
import './teckSkills.css'
import { BsPatchCheckFill } from "react-icons/bs";

function Skills({skills}){
  return (
    <>
      <div className="container experience__container">
        <div className="experience--content">
          {skills&&(skills.map(skill => (
            <article className="experience--details" key={skill}>
              <BsPatchCheckFill color="white"/>
              <h4 className="skills-name">{skill}</h4>
            </article>
          )))}
        </div>
      </div>
    </>
  )
};

export default Skills;
