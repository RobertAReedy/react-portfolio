import React from "react";
import "../../assets/resume.css";

const Resume = () => {
  return (
    <section>
      <h2>Qualifications Summary</h2>
      <ul>
        <li>AS Degree in Computer Science</li>
        <li>Graduate Certificate from University of Richmond Full Stack Boot Camp</li>
        <li>Team player with demonstrated ability to learn, adapt, and innovate</li>
        <li>Analytical mindset and attention to detail</li>
      </ul>

      <h2>Languages and Technology Experience</h2>
      <ul>
        <li>Javascript</li>
        <li>Java</li>
        <li>C#</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
        <li>NoSQL (MongoDB)</li>
        <li>React</li>
        <li>Popular NPM Libraries (MySQL, Mongoose, Handlebars, etc)</li>
      </ul>

      <a 
        href="/../../../placeholder-resume.docx"
        download={"placeholder-resume.docx"}
      >
        <h4>Download Resume</h4>
      </a>
    </section>
  );
}

export default Resume;