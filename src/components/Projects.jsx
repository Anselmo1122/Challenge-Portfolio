import React from "react";
import "../styles/projects.css";
import project1 from "../assets/images/project1.jpg";
import Project from "./sub-components/Project";

const projects = [
  {
    img: project1,
    name: "Recipe Blog",
    description: `In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. `,
    codeUrl: "https://github.com/Anselmo1122/Challenge-portfolio"
  },
  {
    img: project1,
    name: "Recipe Blog",
    description: `In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. `,
    codeUrl: "https://github.com/Anselmo1122/Challenge-portfolio"
  },
  {
    img: project1,
    name: "Recipe Blog",
    description: `In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. `,
    codeUrl: "https://github.com/Anselmo1122/Challenge-portfolio"
  }
]

const Projects = () => {
  return (
    <div className="projects">
      <article className="projects__title">
        <h4>Projects ({ projects.length })</h4>
      </article>
      {
        projects.map((project, id) => { 
          return (
            <Project 
              key={id}
              projectData={project} />
          )
        })
      }
    </div>
  );
};

export default Projects;
