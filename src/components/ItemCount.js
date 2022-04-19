import React from 'react'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const increase = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrease = () => {
        if(counter > initial) {
            setCounter(counter - 1)
        }
    }

    const confirm = (e) => {
        onAdd(counter)
    }


    return (
        <div id="counter">
            <Row>
                <button type="button" onClick={decrease} id='smallButton'>-</button>
                <div id='valueCounter'><p>{counter}</p></div>
                <button type="button" onClick={increase} id='smallButton'>+</button>
            </Row>
            <Row>
                <button type="button" onClick={confirm} id='button'>Añadir al carrito</button>
            </Row>
        </div>
    )
}

export default ItemCount