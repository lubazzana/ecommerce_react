import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import {db} from '../Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {Table, Container, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

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
            toast.success('¡Muchas gracias por su compra! El código de su compra es:' + res.id, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                
            clear()
        })
    }
    
    return (
        <div>
            <h1 id='cartTitle'>Tu carrito</h1>
            {cart.length > 0 ?
                <>
                <Container id="cart">

                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Eliminar</th>
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
                                        </td>
                                        <td>
                                            <Button id='deleteButton' onClick={()=> removeItem(item.prod.id)}><FaTrashAlt /></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}

                        <tfoot>
                            <tr>
                                <td colSpan={3} id="totalPrice">Total: ${total}</td>
                                <td colSpan={1}><Button variant="primary" id='button'onClick={clear}>Vaciar carrito</Button></td>
                            </tr>
                            <tr id='finalButtons'>
                                <Link as={Link} to='/'>
                                    <Button id="button">Seguir comprando</Button>
                                </Link>
                                
                                <Button id="button" onClick={buyOrder}>Finalizar compra</Button>
                            </tr>
                        </tfoot>
                            

                    </Table>
                </Container>
                    
                        
                </>

                :

                    <div id="cart">
                        <h3 className='emptyCart'>No hay productos en tu carrito</h3>
                        <Link to='/'>
                            <button id='button'>Volver</button>
                        </Link>
                    </div>

            }
        </div>
    )
}

export default Cart