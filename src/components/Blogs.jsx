import React from "react";
import "../styles/blogs.css";
import blogImg1 from "../assets/images/computer.jpg";

const Blogs = () => {
  return (
    <div className="blogs grid__item">
      <article className="blogs__title">
        <h4>Blogs (1)</h4>
      </article>
      <article className="blogs__blog">
        <img src={ blogImg1 } alt="Computer"/>
        <div>
          <span>Blog</span>
          <h2>How to <br/>organize your <br/>CSS</h2>
          <p>
            In this article I tell the story about Proin eu justo sit amet lacus
            bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
          </p>
          <br/>
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
          <a href="https://">dev.to</a>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
