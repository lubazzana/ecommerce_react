import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

import { toast } from 'react-toastify'

import './itemdetail.css'

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
        <div className='container'>
            
            <img src={product.img} className='bookCover' alt='portada'/>

            <div className='details'>
                <h2 className='bookTitle'>{product.name}</h2>
                <h3 className='bookData'>Autor: {product.author} - Editorial: {product.editorial}</h3>
                <p className='bookSynopsis'>{product.synopsis}</p>
                <div>
                    <p className='bookPrice'>${product.price}</p>
                    {seleccionado ? <Link to={'/cart'}><button id='buttonItem'>Ir al carrito</button></Link> : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail 