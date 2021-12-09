import React from 'react';
import warning from '../assests/warning.png';


const Navbar = () => {
  return (
    <div className='header'>
      <div className="header__alert"> 
        <img src={warning} alt='warning'/>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
      <nav className="header__navbar">
        <div className="header__navbar__logo">
          logo
        </div>
        <div className="header__navbar--links">
          <p><a href="#">Dashboard</a></p>
          <p><a href="#">Account</a></p>
          <p><a href="#">Help</a></p>
          <p><a href="#">Logout</a></p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
