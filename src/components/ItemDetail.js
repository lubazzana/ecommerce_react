import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

import { toast } from 'react-toastify'

import './itemdetail.css'

const ItemDetail = ({product}) => {
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

        if (unidadSeleccionada !== undefined) {
            console.log(unidadSeleccionada);
            setSeleccionado(unidadSeleccionada)
        }
    }
    
    return (
        <div className='container'>
            
            <img src={product[0].img} className='bookCover' alt='portada'/>

            <div className='details'>
                <h2 className='bookTitle'>{product[0].name}</h2>
                <h3 className='bookData'>Autor: {product[0].author} - Editorial: {product[0].editorial}</h3>
                <p className='bookSynopsis'>{product[0].synopsis}</p>
                <div>
                    <p className='bookPrice'>${product[0].price}</p>
                    {seleccionado ? <Link to={'/cart'}><button id='buttonItem'>Ir al carrito</button></Link> : <ItemCount initial={1} stock={product[0].stock} onAdd={onAdd}/>}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail 