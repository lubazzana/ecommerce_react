import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'

import './itemlistcontainer.css'

let prodLibros = [
    {
        id: 1,
        code: 'JT', 
        img: '/images/Tolkien.jpg', 
        name: 'El Señor de los Anillos', 
        author: 'J.R.R. Tolkien', 
        synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae facere temporibus sapiente quae distinctio in odit voluptate qui dolorum quisquam recusandae obcaecati culpa praesentium aliquam nihil quod iure ex commodi', 
        editorial: 'Debolsillo', 
        category: 'fiction', 
        price: 3000,
        stock: 300
    },

    {
        id: 2, 
        code: 'JR',
        img: '/images/Rowling.jpg', 
        name: 'Harry Potter', 
        author: 'J.K. Rowling',
        synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae facere temporibus sapiente quae distinctio in odit voluptate qui dolorum quisquam recusandae obcaecati culpa praesentium aliquam nihil quod iure ex commodi', 
        editorial: 'Salamandra', 
        category: 'fiction', 
        price: 2200,
        stock: 300
    },

    {
        id: 3, 
        code: 'IF', 
        img: '/images/Falcones.jpg',
        name: 'La Catedral del Mar', 
        author: 'Ildefonso Falcones', 
        synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae facere temporibus sapiente quae distinctio in odit voluptate qui dolorum quisquam recusandae obcaecati culpa praesentium aliquam nihil quod iure ex commodi',
        editorial: 'Debolsillo', 
        category: 'new', 
        price: 2000,
        stock: 300
    },

    {
        id: 4, 
        code: 'KF', 
        img: '/images/Follet.jpg', 
        name: 'Los Pilares de la Tierra', 
        author: 'Ken Follet', 
        synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae facere temporibus sapiente quae distinctio in odit voluptate qui dolorum quisquam recusandae obcaecati culpa praesentium aliquam nihil quod iure ex commodi',
        editorial: 'Planeta', 
        category: 'new', 
        price: 4000,
        stock: 300
    },
    {
        id: 5, 
        code: 'DB', 
        img: '/images/Brown.jpg', 
        name: 'El Código Da Vinci', 
        author: 'Dan Brown', 
        synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae facere temporibus sapiente quae distinctio in odit voluptate qui dolorum quisquam recusandae obcaecati culpa praesentium aliquam nihil quod iure ex commodi',
        editorial: 'Planeta', 
        category: 'essay', 
        price: 1700,
        stock: 300
    }
]

const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])
    const [error, setError] = useState(false)
    const {category} = useParams()

    useEffect(()=>{
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(prodLibros)
            }, 2000)
        })

        promise
        .then((res)=>{
            if (category !== undefined) {
                const prodFilter = prodLibros.filter(product => product.category === category)
                setProducts(prodFilter)
            } else {
                setProducts(prodLibros)
            }
        })
        .catch((error)=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [category])
    return (
        <>
            <h1>{props.greeting}</h1>
            <p>{loading ? 'Cargando, por favor espere...' : null}</p>
            <h4>{error ? 'Error al cargar la página, por favor intente nuevamente' : null}</h4>
            <ItemList products = {products}/>
        </>
    )
}

export {prodLibros}
export default ItemListContainer