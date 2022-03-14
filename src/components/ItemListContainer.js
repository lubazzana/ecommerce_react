import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'

import './itemlistcontainer.css'

let prodLibros = [
    {id: 1, img: '/images/Tolkien.jpg', name: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', editorial: 'Debolsillo', category: 'Ficción', price: 3000},
    {id: 2, img: '/images/Rowling.jpg', name: 'Harry Potter', author: 'J.K. Rowling', editorial: 'Salamandra', category: 'Ficción', price: 2200},
    {id: 3, img: '/images/Falcones.jpg', name: 'La Catedral del Mar', author: 'Ildefonso Falcones', editorial: 'Debolsillo', category: 'Ficción', price: 2000},
    {id: 4, img: '/images/Follet.jpg', name: 'Los Pilares de la Tierra', author: 'Ken Follet', editorial: 'Planeta', category: 'Ficción', price: 4000},
    {id: 5, img: '/images/Brown.jpg', name: 'El Código Da Vinci', author: 'Dan Brown', editorial: 'Planeta', category: 'Ficción', price: 1700}
]

const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])
    const [error, setError] = useState(false)

    useEffect(()=>{
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(prodLibros)
            }, 2000)
        })

        promise
        .then((res)=>{
            setProducts(prodLibros)
        })
        .catch((error)=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [])
    return (
        <>
            <h1>{props.greeting}</h1>
            <p>{loading ? 'Cargando, por favor espere...' : null}</p>
            <h4>{error ? 'Error al cargar la página, por favor intente nuevamente' : null}</h4>
            <ItemList products = {products}/>

            {/* <ItemCount stock={5} initial={1}/> */}
        </>
    )
}

export default ItemListContainer