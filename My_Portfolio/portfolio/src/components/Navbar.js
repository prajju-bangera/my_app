import React from 'react'

function Navbar() {
  return (
    <div>
       <header>
            <div class="mp">MyPortfolio</div>
            <nav class="menu">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a>
                <a href="#work">DESIGN</a>
            </nav>

            <a href="./Praj resume new.pdf" download class="resume">

                <i class="fa fa-download"></i>
                <span>Resume</span>
            </a> 
        </header>  
    </div>
  )
}

export default Navbar
