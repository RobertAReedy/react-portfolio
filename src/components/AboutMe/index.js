import React from "react";
import "./aboutMe.css";

const brandStatement = "Back-end developer interested in gaining a more thorough understanding of the broader spectrum of programming. Graduated with a certificate in  Full Stack Web Development from the University of Richmond, gaining skills and familiarity with HTML, CSS, Javascript, and various other tools such as React, SQL, and Mongoose. Known for focusing on details such as refactoring optimization, performance improvement, and security vulnerabilities. Recently worked on a team of four to produce a full stack MERN application that allows a user to search for books based on movies they enjoyed, or vise versa. Most of all, though: itching to get into the field to further improve skills, knowledge, and understanding of the programming landscape.";

function AboutMe() {
  return (
    <section class="about-me" id="about-me">
      <h2 class="header-text">About Me</h2>
      <p class="about-me-p">{brandStatement}</p>
      
    </section>
  );
}

export default AboutMe;