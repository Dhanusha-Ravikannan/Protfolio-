import React from 'react'
import Navbar from './Navbar'
import 'animate.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const MainHome = () => {
  return (
    <> 
    <Navbar/>    
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default MainHome