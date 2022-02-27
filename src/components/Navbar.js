import React from 'react'

import './navbar.css'


const Navbar = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="logo">
                    <a href="#">Atlas Librería</a>
                </li>
                
                <li className="item">
                    <a href="#">Categorías</a>
                </li>
                
                <li className="item">
                    <a href="#">Novedades</a>
                </li>
                
                <li className="item">
                    <a href="#">Los más vendidos</a>
                </li>
                
                <li className="item">
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar