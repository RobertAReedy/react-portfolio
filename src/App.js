import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';
import React, { useState } from "react";
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  return (
    <div>
      <Header setCurrentPage={setCurrentPage}/>
      {
        currentPage === "AboutMe" ? <AboutMe></AboutMe> : 
        currentPage === "Portfolio" ? <Portfolio></Portfolio> :
        currentPage === "Resume" ? <Resume></Resume> : ""
      }
      <Footer />
    </div>
  );
}

export default App;