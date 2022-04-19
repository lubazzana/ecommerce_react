import React from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap'

const ItemList = ({products}) => {
    return (
        <>
            <Container className='list'>
                {products.map((product) => {
                    return <Item  key={product.id} product = {product} />
                    })}
            </Container>
        </>
    )
}

export default ItemList