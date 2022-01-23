import React from 'react';
import reactlogo from '../imges/reactlogo.png';
const NavBar =({mode,modeChanger})=>{return(
    <header>
        <nav className={mode ? "navbar navbarLight":"navbar"}>
            <img src={reactlogo} alt="react logo" />
            <h2 className="logoName">ReactFacts</h2>
            <div className="side">
                <h3>light</h3>
                <div className="slideBox">
                    <input className="slide" onChange={modeChanger} type="checkbox" checked={mode}/>
                </div>
                <h3 className="secondary">dark</h3>
            </div>
        </nav>
    </header>
)};
export default  NavBar;  