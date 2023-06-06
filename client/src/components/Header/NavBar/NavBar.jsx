import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav className="nav-bar">
    <Link to="/">Home</Link>
    <Link to="/admin/dashboard">Admin Dashboard</Link>
    <Link to="/admin/other">Admin</Link>
    <Link to="/client/dashboard">Client Dashboard</Link>
    <Link to="/client/other">Client</Link>
 
  </nav>;
};

export default NavBar;
