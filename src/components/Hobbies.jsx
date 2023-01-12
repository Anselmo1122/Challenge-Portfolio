import React from 'react';
import "../styles/hobbies.css";
import hobbieImg1 from "../assets/images/gaming.jpg";
import hobbieImg2 from "../assets/images/cooking.jpg";
import hobbieImg3 from "../assets/images/biking.jpg";

const Hobbies = () => {
  return (
    <article className='hobbies'>
      <h2 className='hobbies__title'>Hobbies</h2>
      <div className='hobbies__hobbie'>
        <img src={ hobbieImg1 } alt="Gaming" />
        <h4>Gaming</h4>
        <p>Quisque feugiat malesuada molestie.</p>
      </div>
      <div className='hobbies__hobbie'>
        <img src={ hobbieImg2 } alt="Cooking" />
        <h4>Cooking</h4>
        <p>Quisque feugiat malesuada molestie.</p>
      </div>
      <div className='hobbies__hobbie'>
        <img src={ hobbieImg3 } alt="Biking" />
        <h4>Biking</h4>
        <p>Quisque feugiat malesuada molestie.</p>
      </div>
    </article>
  )
}

export default Hobbies