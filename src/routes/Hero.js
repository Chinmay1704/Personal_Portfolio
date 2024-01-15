import React from "react";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/Aboutpage";
import Skillspage from "../components/SkillsPage/Skillspage";
import ProjectsPage from "../components/ProjectPage/ProjectPage";
import Contact from "../components/ContactPage/contact";


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