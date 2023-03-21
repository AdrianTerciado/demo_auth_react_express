import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav className="nav-bar">
    <Link to="/">Home</Link>
    <Link to="/admin">Admin View</Link>
    <Link to="/user">User</Link>
 
  </nav>;
};

export default NavBar;
