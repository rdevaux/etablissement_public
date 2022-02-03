import React from "react";
import { NavLink } from "react-router-dom";

const navBar = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand">Nord MGA</span>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto ms-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/localisation" className="nav-link">Localisation</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
};

export default navBar;