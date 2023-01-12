import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <article className="skills__list">
        <h3 className="list__title">Front End</h3>
        <ul className="list__skills">
          <li><p>React</p><div><span></span></div></li>
          <li><p>JavaScript</p><div><span></span></div></li>
          <li><p>CSS</p><div><span></span></div></li>
          <li><p>Vue</p><div><span></span></div></li>
          <li><p>Redux</p><div><span></span></div></li>
          <li><p>React Native</p><div><span></span></div></li>
        </ul>
      </article>
      <article className="skills__list">
        <h3 className="list__title">Design</h3>
        <ul className="list__skills">
          <li><p>Figma</p><div><span></span></div></li>
          <li><p>Photoshop</p><div><span></span></div></li>
        </ul>
      </article>
    </div>
  );
};

export default Skills;
