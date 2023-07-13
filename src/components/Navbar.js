import React from 'react';
import logo from "../assets/logo.jpg"
import stylesheet from  "../styles/style.css"
import { Button } from 'react-scroll';
const App = () => {
  return (
    <nav className='navbar'>
      <ul>
        <img src={logo} alt ="logo" className ="logoImg"/>
      </ul>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>My Works</li>
      </ul>
      <ul>
        <button className='button'>Contact</button>
      </ul>
    </nav>
  );
};

export default App;
