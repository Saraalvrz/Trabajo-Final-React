import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles/nav.css'
import iconCart from '../img/cartIcon.png'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleModal = () => setIsModalOpen(!isModalOpen);

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
                                <li><Link to="/bycategory/Shoes" className="dropdown-item custom-dropdown-item link">Electrónicos</Link></li>
                                <li><Link to="/byCategory/Clothing" className="dropdown-item custom-dropdown-item link">Ropa</Link></li>
                                <li><Link to="/byCategory/Miscellaneous" className="dropdown-item custom-dropdown-item link">Variedades</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item cart-icon" onClick={toggleModal}>
                        <img src={iconCart} alt="Cart" className="cart-icon-img" />
                    </li>
                </ul>

            </nav>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-modal" onClick={toggleModal}>X</button>
                        <h2>Tu carrito</h2>
                        <p>Aquí aparecerán los productos seleccionados.</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar