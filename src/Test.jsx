import React from "react";
import {NavLink} from "react-router-dom";

function Test()
{
return(
<React.Fragment>
<nav className="navbar navbar-expand-md bg-dark navbar-dark">

 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">HOME</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/catering">CATERING</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/locations">LOCATIONS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/order">ORDER NOW</NavLink>
      </li>
    </ul>
  </div>
</nav>
   
</React.Fragment>
);
} 

export default Test;