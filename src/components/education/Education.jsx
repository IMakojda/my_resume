import React from 'react';
import './education.css';
import EducationList from "./EducationList";
import user from '../../data/data.json'

console.log(user.Education)
const Education = () => {
  return (
    <section id="education">
      <h5>About my</h5>
      <h2>Education</h2>
        <EducationList educations={user.Education}/>
    </section>
  );
};

export default Education;
