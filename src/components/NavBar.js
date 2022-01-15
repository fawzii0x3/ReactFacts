import React from 'react';
import reactlogo from '../imges/reactlogo.png';
const NavBar =()=>{return(
    <header>
        <nav className="navbar">
            <img src={reactlogo} alt="react logo" />
            <h2 className="logoName">ReactFacts</h2>
            <h3 className="side">React Course - Project 1</h3>
        </nav>
    </header>
)};
export default  NavBar;  