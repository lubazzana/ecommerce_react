import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { Container, Row, Col } from 'react-bootstrap'

// import './itemdetail.css'

const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    const [seleccionado, setSeleccionado] = useState(false)

    const onAdd = (unidadSeleccionada) => {
        toast.success('¡Añadiste el producto al carrito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
        addItem(product, unidadSeleccionada)

        if (unidadSeleccionada !== undefined) {
            setSeleccionado(unidadSeleccionada)
        }
    }
    
    return (
        <div>
            <Container id="detail">
                <Row>
                    <Col md={4}>
                        <img src={product.img} id='bookCover' alt='portada'/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <h2 id='bookTitle'>{product.name}</h2>
                        </Row>
                        <Row>
                            <h3 id='bookData'>Autor: {product.author} - Editorial: {product.editorial}</h3>
                        </Row>
                        <Row>
                            <p id='bookSynopsis'>{product.synopsis}</p>
                        </Row>
                        <Row>
                            <div>
                                <p id='bookPrice'>Precio: ${product.price}</p>
                                {seleccionado ? <Link to={'/cart'}><button id='button'>Ir al carrito</button></Link> : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>}
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail 