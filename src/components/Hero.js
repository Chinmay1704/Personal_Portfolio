import React from "react";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/Aboutpage";
import Skillspage from "./SkillsPage/Skillspage";
import ProjectsPage from "./ProjectPage/ProjectPage";
import Contact from "./ContactPage/contact";


function Hero() {
  return (
    <>
    <HomePage/>
    <AboutPage/>
    <Skillspage/>
    <ProjectsPage/>
    <Contact/>
    </>
  );
}

export default Hero;