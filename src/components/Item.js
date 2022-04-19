import React from 'react'
import {NavLink} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Item = ({product}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} className='imageItem' alt='Portada libro'/>
                <Card.Body>
                    <Card.Title id="titleItem">{product.name}</Card.Title>
                    <Card.Text id="authorItem">{product.author}</Card.Text>
                    <Card.Text id="editorialItem">{product.editorial}</Card.Text>
                    <Card.Text id="priceItem">${product.price}</Card.Text>
                    <Button variant="primary" as={NavLink} to={`/item/${product.id}`}>Ver detalle</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default Item