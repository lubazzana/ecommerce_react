import React from 'react'
import ItemCount from './ItemCount'

import './itemlistcontainer.css'

const ItemListContainer = (props) => {
    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} initial={1}/>
        </>
    )
}

export default ItemListContainer