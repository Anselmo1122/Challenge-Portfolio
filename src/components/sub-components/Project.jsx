import React from "react";

const Project = ({ projectData }) => {
  return (
    <article className="projects__project">
        <img src={ projectData.img } alt="Recipe Blog" />
        <div className="project">
          <h5>
            <span>#HTML</span>
            <span>#CSS</span>
            <span>#responsive</span>
          </h5>
          <h2>{ projectData.name }</h2>
          <p className="project__description">
            { projectData.description }
          </p>
          <button className="project__button-primary">
            <a 
              href={ projectData.codeUrl }
              target="_blank" 
              rel="noreferrer"
            >
              Demo
            </a>
          </button>
          <button className="project__button-secondary">
            <a 
              href={ projectData.codeUrl }
              target="_blank" 
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
    </article>
  );
};

export default Project;
