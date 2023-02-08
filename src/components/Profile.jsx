import React from "react";
import "../index.scss"
import profile from "../assets/images/person.jpg";
import { IoMdMail } from "react-icons/io";
import { HiPhone } from "react-icons/hi";

const Profile = () => {
  return (
    <article className="profile grid__item">
      <img src={profile} alt="person" />
      <h1 className="profile__title">Stella Flores</h1>
      <span className="profile__specialty">Front-end developer</span>

      <ul className="profile__contact">
        <li className="contact__item">
          <IoMdMail className="icon" />
          <p>stella@example.com</p>
        </li>
        <li className="contact__item">
          <HiPhone className="icon" />
          <p>(+603) 546 624 342</p>
        </li>
      </ul>

      <p className="profile__description">
        Self-motivated developer, who is 
        willing to learn and create 
        outstanding UI applications.
      </p>
    </article>
  )
};

export default Profile;
