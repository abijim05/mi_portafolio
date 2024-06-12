// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaHome, FaProjectDiagram } from 'react-icons/fa';
import './Navbar.css'; // Importa el archivo de estilos

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink exact to="/" activeClassName="active" className="navbar-link">
                        <FaHome className="navbar-icon" /> Inicio
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/profile" activeClassName="active" className="navbar-link">
                        <FaUser className="navbar-icon" /> Perfil
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/repositories" activeClassName="active" className="navbar-link">
                        <FaProjectDiagram className="navbar-icon" /> Proyectos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
