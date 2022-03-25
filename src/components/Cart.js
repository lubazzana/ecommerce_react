import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

const Cart = () => {
    const { cart, removeItem, clear, total } = useContext(CartContext)
    
    return (
        <div>
            <h1>Carrito</h1>
            {cart.map (item => {
                return (
                    <div key={item.prod.id}>
                        <p>{item.prod.name}</p>
                        <p>x {item.cant} Unid.</p>
                        <p>$ {item.prod.price * item.cant}</p>
                        <button onClick={()=> removeItem(item.prod.id)}>Eliminar producto</button>
                    </div>
                )
            })}
            <p>$ {total}</p>
            <button onClick={clear}>Vaciar carrito</button>
        </div>
    )
}

export default Cart