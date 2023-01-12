import React from "react";
import "../styles/Experiences.css";
import experienceImg1 from "../assets/images/adidasLogo.png";
import experienceImg2 from "../assets/images/niveaLogo.png";
import experienceImg3 from "../assets/images/appleLogo.png";
import Experience from "./sub-components/Experience";


const experiences = [
  {
    img: experienceImg1,
    alt: "Adidas logo",
    date: "Feb 2017 - Current",
    specialty: "Front-end developer",
    description: `Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`
  },
  {
    img: experienceImg2,
    alt: "Nivea logo",
    date: "Aug 2016 - Feb 2018",
    specialty: "Full-stack developer",
    description: `Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`
  },
  {
    img: experienceImg3,
    alt: "Apple logo",
    date: "Jun 2015 - Aug 2016",
    specialty: "Junior front-end developer",
    description: `Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`
  }
]

const Experiences = () => {
  return (
    <article className="experiences">
      <h2 className="experiences__title">Experiences</h2>
      {
        experiences.map((experience, id)=>{
          return(
            <Experience 
              key={id}
              experienceData={experience}
            />
          )
        })
      }
    </article>
  );
};

export default Experiences;
