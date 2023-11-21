import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";
import { MdOutlineVideoCameraFront } from "react-icons/md";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand fontStyle" to="/">
                Minstagram
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/"><GoHomeFill/></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/reels"><MdSmartDisplay/></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/create-reel"><MdOutlineVideoCameraFront/></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/create-post"><FaRegSquarePlus/></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/profile"><FaUserAlt/></NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header
