import React from "react";

const Experience = ({ experienceData }) => {
  return (
    <div className="experiences__experience">
      <img src={ experienceData.img } alt={ experienceData.alt } />
      <div className="experience__description">
        <p>{ experienceData.date }</p>
        <h5>{ experienceData.specialty }</h5>
        <p>
          { experienceData.description }
        </p>
      </div>
    </div>
  );
};

export default Experience;
