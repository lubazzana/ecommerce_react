import React from 'react'
import { useState } from 'react'
import './itemCount.css'

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
        <div className='countContainer'>
            <div className='counter'>
                <button type="button" onClick={decrease} className='buttonDecrease'>-</button>
                <div className='valueInput'><p>{counter}</p></div>
                <button type="button" onClick={increase} className='buttonIncrease'>+</button>
            </div>
            <div className='addToCart'>
                <button type="button" onClick={confirm} className='buttonAdd'>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount