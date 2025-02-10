import React from 'react';
import './Navbar.css';
import 'animate.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  return (
    <> 
    <header className='header'> 

   <a href='#' className='logo'> Protfolio </a>
    <nav className='navbar'>       
        <a href='#'> Home</a>
        <a href='#'> About</a>
        <a href='#'> Skills</a>
        <a href='#'> Project</a>
        <a href='#'> Contact</a>
    </nav> 
    </header>   

    <section className='home'> 
    <div className='home-content'> 
    <h3 className='animate__animated animate__bounceInDown'> Hello, It's me </h3>
    <h1 className='animate__animated animate__bounceInDown'> Dhanusha Ravikannan </h1>
    {/* <h3 className='animate__animated animate__bounceInDown'> And I'm a Front-End Developer</h3> */}
    <p> I'm a Passionate Front-End Developer with extensive experience</p>
    <br/>in creatig website design, Frontend design 
    <div className='home-scl'> 
            <a href='#'><i className='bx bxl-linkedin-square'></i></a>
            <a href='#'><i className='bx bxl-gmail'></i></a>
    </div>
    <div> 
      <a href='#' className='btn-box animate__animated animate__flash'> More About me </a>
    </div>

    </div>     
    </section>
    </>
  )
}

export default Navbar