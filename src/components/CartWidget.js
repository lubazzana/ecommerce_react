import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';

import './cartwidget.css'

const CartWidget = () => {
    const { cantidad } = useContext(CartContext)

    return (
        <>
            <FaShoppingCart />
            <p className='batch'>{cantidad}</p>
        </>
    )
}

export default CartWidget