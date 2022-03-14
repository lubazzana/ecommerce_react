import React from 'react'
import ItemCount from './ItemCount'
import './itemdetail.css'

const ItemDetail = ({product}) => {
    return (
        <div className='container'>
            
            <div className='imgPortada'>
                <img src={product.img} className='bookCover' alt='portada'/>
            </div>

            <div className='details'>
                <h2 className='bookTitle'>{product.name}</h2>
                <h3 className='bookData'>Autor: {product.author} - Editorial: {product.editorial}</h3>
                <p className='bookSynopsis'>{product.synopsis}</p>
                <p className='bookPrice'>${product.price}</p>
                <ItemCount/>
            </div>

        </div>
    )
}

export default ItemDetail