import React from "react";
import "./header.css";

function Header(props) {
  const {setCurrentPage} = props; 

  return (
    <header>
      <h1>Robert Reedy</h1>
      <nav>
        <ul>
          <li onClick={() => {
            setCurrentPage("AboutMe")
          }}>
            About Me
          </li>
          <li onClick={() => {
            setCurrentPage("Portfolio")
          }}>
            Portfolio
          </li>
          <li onClick={() => {
            setCurrentPage("Resume")
          }}>
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;