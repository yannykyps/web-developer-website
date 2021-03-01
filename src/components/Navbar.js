import React from 'react'
import { Link } from "gatsby"
import logo from "../assets/yannylogo.svg"
import { FaAlignRight } from "react-icons/fa"
import Links from "../constants/links"

const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
                <Link to="/"><img className="logo" src={logo} width="180" height="47.78" alt="logo" /></Link>
                <button className="toggle-btn" aria-label="toggle menu" onClick={toggleSidebar}>
                <FaAlignRight />
                </button>
            </div>
            <Links styleClass="nav-links" />
            </div>
        </nav>
    )
}

export default Navbar

