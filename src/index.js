import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
const App = ()=>{return(
    <div>
        <NavBar />
        <Main />
    </div>
)};
ReactDOM.render(<App />,document.getElementById("root"));