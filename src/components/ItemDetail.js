import React from 'react'
import ItemCount from './ItemCount'
import './itemdetail.css'

const ItemDetail = ({product}) => {
    return (
        <div className='container'>
            
            <img src={product[0].img} className='bookCover' alt='portada'/>

            <div className='details'>
                <h2 className='bookTitle'>{product[0].name}</h2>
                <h3 className='bookData'>Autor: {product[0].author} - Editorial: {product[0].editorial}</h3>
                <p className='bookSynopsis'>{product[0].synopsis}</p>
                <p className='bookPrice'>${product[0].price}</p>
                <ItemCount/>
            </div>

        </div>
    )
}

export default ItemDetail 