import React from 'react';

function ProjectCards ({projects}){
  return (<>
      <div className="container project__container">
        {projects && (projects.map(project=>(
          <article className="project-item" key={project.name}>
            <div className="item-image">
              <img src={require(`../../image/projectFoto/${project.image}.webp`)} alt={project.name}/>
            </div>
            <h3>{project.name}</h3>
            <p className="description-item">{project.description}</p>
            <div className="cards-btn">
              <a href={`${project.repo}`} className="btn" >Github</a>
              <a href={`${project.https}`}  className="btn" >Live Demo</a>
            </div>

          </article>
        )))
        }
      </div>
  </>
  );
};

export default ProjectCards;
