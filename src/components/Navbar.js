import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

import './navbar.css'

import CartWidget from './CartWidget'

import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
    const { cantidad } = useContext(CartContext)

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

                {cantidad === 0 ||
                    <Link to={'/cart'}>
                        <li><CartWidget/></li>
                    </Link>
                }

            </ul>
        </nav>
    )
}

export default Navbar