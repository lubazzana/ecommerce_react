import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import {Badge, Button} from 'react-bootstrap'

// import './cartwidget.css'

const CartWidget = () => {
    const { cantidad } = useContext(CartContext)

    return (
        <>
            <Button variant="light" type="button" size="lg"><FaShoppingCart /></Button><Badge bg="danger">{cantidad}</Badge>
        </>
    )
}

export default CartWidget