import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/directors">Directors</NavLink>
        </li>
        <li>    
          <NavLink activeClassName="active" to="/actors">Actors</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  )}

export default NavBar;
