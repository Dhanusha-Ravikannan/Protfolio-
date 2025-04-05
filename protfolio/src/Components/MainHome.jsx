import React from 'react'
import Navbar from './Landing'
import 'animate.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Experience from './Experience';

const MainHome = () => {
  return (
    <> 
    <Navbar/>    
    <About/>
    <Skills/>
    <Project/>
    <Experience/>
    <Contact/>
    
    </>
  )
}

export default MainHome