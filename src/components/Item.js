import React from 'react'

import './item.css'

const Item = ({product}) => {
    return (
        <li className='itemBook'>
            <div>
                <div>
                    <img src={product.img} className='imageItem'/>
                </div>
                <div className='info'>
                    <h4 className='titleItem'>{product.name}</h4>
                    <h5 className='authorItem'>{product.author}</h5>
                    <p className='infoItem'>{product.editorial}</p>
                </div>
                <div className='priceItem'>
                        <p>${product.price}</p>
                </div>

                <button className='buttonItem'>Ver detalle</button>
            </div>
        </li>
    )
}

export default Item