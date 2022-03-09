import React from 'react'
import Item from './Item'

import './itemlist.css'

const ItemList = ({products}) => {
    return (
        <ul className='list'>
            {products.map(product => {
                return <Item  key={product.id} product = {product} />
                })}
        </ul>
    )
}

export default ItemList