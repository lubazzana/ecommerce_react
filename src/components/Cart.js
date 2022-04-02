import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import {db} from '../Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import './cart.css'

const Cart = () => {
    
    const { cart, removeItem, clear, total } = useContext(CartContext)
    
    const buyOrder = () => {
        const order = {
            buyer : {
                name: 'Lucrecia',
                phone: '123456789',
                email: 'lucrecia@mail.com'
            },
            items: cart,
            date: serverTimestamp(),
            total: total
        }

        const ordersCollection = collection(db, 'orders')
        const buy = addDoc(ordersCollection, order)

        buy
        .then(res => {
            console.log(res.id)
            console.log('Gracias por su compra')
            clear()
        })
    }
    
    return (
        <div>
            <h1>Tu carrito</h1>
            {cart.length > 0 ?
                
                <>
                    <table>
                        <thead className='tableHead'>
                            <tr>
                                <th className='cartTableProd'>Producto</th>
                                <th className='cartTableCant'>Cantidad</th>
                                <th className='cartTablePrize'>Precio</th>
                            </tr>
                        </thead>

                        {cart.map (item => {
                            return (
                                <tbody key={item.prod.id}>
                                    <tr>
                                        <td className='cartTableProd'>{item.prod.name}</td>
                                        <td className='cartTableCant'>{item.cant} Unid.</td>
                                        <td className='cartTablePrize'>
                                            $ {item.prod.price * item.cant}
                                            <button className='deleteButton' onClick={()=> removeItem(item.prod.id)}><FaTrashAlt /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                        
                    <div className='total'>
                        <h3>Total: $ {total}</h3>
                        <button className='buttonEmpty'onClick={clear}>Vaciar carrito</button>
                    </div>
                        
                    <div className='cartDiv'>
                        <Link to='/'> <button className='buttonCart'>Seguir comprando</button> </Link>
                        <button className='buttonCart' onClick={buyOrder}>Finalizar compra</button>
                    </div>
                </>

                :

                    <div className='cartDiv'>
                        <h3 className='emptyCart'>No hay productos en tu carrito</h3>
                        <Link to='/'>
                            <button className='buttonCart'>Volver</button>
                        </Link>
                    </div>

            }
        </div>
    )
}

export default Cart