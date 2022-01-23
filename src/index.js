import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
const App = ()=>{
    const [mode,setMode]=useState(false);
    const modeChanger=(input)=>{
        setMode(input.target.checked);
    }
    console.log(mode)
return( <div>
            <NavBar mode={mode} modeChanger={modeChanger}/>
            <Main mode={mode}/>
        </div>
)};
ReactDOM.render(<App />,document.getElementById("root"));