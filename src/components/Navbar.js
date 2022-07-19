import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../img/logoStarwars.jpg"
export default function Navbar() {
    return (
        <div id="container-navbar">
            <img id="logo" src={logo}></img>
            <div id="navbar-links">
                <NavLink to="/">
                    HOME
                </NavLink>
                <NavLink to="/starships">
                    STARSHIPS
                </NavLink>
            </div>
        </div>
    )
}