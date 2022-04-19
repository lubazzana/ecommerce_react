import React from 'react'
import {NavLink} from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'

const Item = ({product}) => {
    return (
        <>
            <Col md>
                <Card id="bookCard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} id='imageItem' alt='Portada libro'/>
                    <Card.Body id="bodyCard">
                        <Card.Title id="titleItem">{product.name}</Card.Title>
                        <Card.Text id="authorItem">{product.author}</Card.Text>
                        <Card.Text id="editorialItem">{product.editorial}</Card.Text>
                        <Card.Text id="priceItem">${product.price}</Card.Text>
                        <Button id="button" variant="primary" as={NavLink} to={`/item/${product.id}`}>Ver detalle</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item