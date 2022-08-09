import React from 'react';
import './projects.css';
import ProjectCards from "./ProjectCard";
import user from "../../data/data.json";

const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
    <ProjectCards projects={user.Projects}/>
    </section>
  );
};

export default Projects;
