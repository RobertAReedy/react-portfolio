import React from "react";
import "./resume.css";
import file from "./RReedy_Resume_3-22.docx"

const Resume = () => {
  return (
    <section>
      <h1 className="header-text">Resume: The Short Version</h1>
      <h2>Qualifications Summary</h2>
      <ul>
        <li>Graduate Certificate from University of Richmond Full Stack Boot Camp</li>
        <li>AS Degree in Computer Science</li>
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
        <li>Other popular NPM Libraries (MySQL2, Mongoose, Express, etc)</li>
      </ul>

      <a 
        href={file}
        download="RReedy_Resume"
      >
        <h4>Download Full Resume</h4>
      </a> 
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br>
    </section>
  );
}

export default Resume;