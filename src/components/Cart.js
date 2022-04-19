import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import {db} from '../Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {Table, Container, Button} from 'react-bootstrap'
// import './cart.css'

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
                <Container>
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
                                            <Button className='deleteButton' onClick={()=> removeItem(item.prod.id)}><FaTrashAlt /></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}

                        <tfoot>
                            <tr>
                                <td></td>
                                <td>Total: ${total}</td>
                                <td><Button variant="primary" className='buttonEmpty'onClick={clear}>Vaciar carrito</Button></td>
                            </tr>
                            <tr>
                                <Link as={Link} to='/'>
                                    <Button className='buttonCart'>Seguir comprando</Button>
                                </Link>
                                
                                <Button className='buttonCart' onClick={buyOrder}>Finalizar compra</Button>
                            </tr>
                        </tfoot>
                            

                    </Table>
                </Container>
                    
                        
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