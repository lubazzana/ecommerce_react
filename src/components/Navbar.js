import React from 'react'

import './navbar.css'

import CartWidget from './CartWidget'

import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <ul className="menu">

                <NavLink to={'/'}>
                    <li className="logo">Atlas Librería</li>
                </NavLink>
                
                <NavLink to={'/category/fiction'}>
                    <li className="cat">Ficción</li>
                </NavLink>
                
                <NavLink to={'/category/essay'}>
                    <li className="cat">Ensayos</li>
                </NavLink>
                
                <NavLink to={'/category/new'}>
                    <li className="cat">Novedades</li>
                </NavLink>
                
                {/* <li className="cat">
                    <a href="#">Contacto</a>
                </li> */}

                <li className="cat">
                    <a href="#">
                        <CartWidget/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar