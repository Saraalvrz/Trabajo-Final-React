import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Products">Productos</Link></li>
                    <li>
                        <div onClick={toggleDropdown}>Categorías</div>
                        {isDropdownOpen && (
                            <ul className="">
                                <li><Link to="/bycategory/Men">Hombre</Link></li>
                                <li><Link to="/byCategory/Women">Mujer</Link></li>
                                <li><Link to="/byCategory/accesories">Accesorios</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar