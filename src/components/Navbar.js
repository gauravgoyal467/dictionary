import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
        <h2>Dictionary App</h2>
        <div className="rightNav">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/History">History</NavLink>
        </div>
    </div>
  )
}

export default Navbar