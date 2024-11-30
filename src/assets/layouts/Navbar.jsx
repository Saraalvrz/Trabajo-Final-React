import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles/nav.css'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Products">Productos</Link></li>
                    <li className="nav-item">
                        <div onClick={toggleDropdown}>Categorías</div>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu custom-dropdown-menu">
                                <li><Link to="/bycategory/Shoes" className="dropdown-item custom-dropdown-item">Zapatos</Link></li>
                                <li><Link to="/byCategory/Clothing" className="dropdown-item custom-dropdown-item">Ropa</Link></li>
                                <li><Link to="/byCategory/Miscellaneous" className="dropdown-item custom-dropdown-item">Variedades</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar