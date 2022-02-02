import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom'
// import Image from './bak2.jpg';

function Header() {
  return (
    
       
    <div className="tap">
       
      <div class="topnav">
      
      <ul>
      <li>
      <a>
      <Link to="/Register">Register</Link>
        </a>
        </li>
        <li>
        <Link to="/Login">Login</Link>
        </li>
        <li>
        <Link to="/Contact">Contact</Link>
        </li>
        <li>
        <Link to="/Event">Event</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        </li>
        </ul>
        <div><h7> REALTOR</h7> </div>
      </div>

     
  </div>
    
  );
}
export default Header;
