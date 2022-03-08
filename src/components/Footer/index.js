import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/robertandrewreedy/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        </li>
        <li>|</li>
        <li>
          <a href="https://github.com/RobertAReedy/" target="_blank" rel="noreferrer" className="footer-link">Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;