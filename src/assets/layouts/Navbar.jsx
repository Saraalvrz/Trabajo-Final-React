import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav>
                <ul className='lista'>
                    <Link to="/">Inicio</Link>
                    <Link to="/Products">Productos</Link>
                    
                        <div onClick={toggleDropdown}>Categorías</div>
                        {isDropdownOpen && (
                            <ul className="secciones">
                                <Link to="/bycategory/Men">Hombre</Link>
                                <Link to="/byCategory/Women">Mujer</Link>
                                <Link to="/byCategory/accesories">Accesorios</Link>
                            </ul>
                        )}
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar