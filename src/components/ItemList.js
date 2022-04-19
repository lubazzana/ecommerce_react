import React from 'react'
import Item from './Item'
import { Container, Row } from 'react-bootstrap'

const ItemList = ({products}) => {
    return (
        <>
            <Container className='list'>
                <Row>
                    {products.map((product) => {
                        return <Item  key={product.id} product = {product} />
                        })}
                </Row>
            </Container>
        </>
    )
}

export default ItemList