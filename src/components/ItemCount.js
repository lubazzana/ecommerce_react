import React from 'react'
import { useState } from 'react'
import './itemcount.css'

const ItemCount = (props) => {
    const [counter, setCounter] = useState(1)

    const increase = () => {
        if (counter < props.stock) {
            setCounter(counter + 1)
        }
    }

    const decrease = () => {
        if(counter > props.initial) {
            setCounter(counter - 1)
        }
    }

    const onAdd = () => {
        console.log("Añadir al carrito");
    }


    return (
        <div className='countContainer'>
            <div className='counter'>
                <button type="button" onClick={decrease} className='buttonDecrease'>-</button>
                <div className='valueInput'><p>{counter}</p></div>
                <button type="button" onClick={increase} className='buttonIncrease'>+</button>
            </div>
            <div className='addToCart'>
                <button type="button" onClick={onAdd} className='buttonAdd'>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount