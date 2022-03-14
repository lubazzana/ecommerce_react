import React from 'react'
import { useState, useEffect } from 'react'

import ItemDetail from './ItemDetail'

const item = {
    img: '/images/Brown.jpg', 
    name: 'El Código Da Vinci', 
    author: 'Dan Brown', 
    editorial: 'Planeta', 
    category: 'Ficción', 
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae facere temporibus sapiente quae distinctio in odit voluptate qui dolorum quisquam recusandae obcaecati culpa praesentium aliquam nihil quod iure ex commodi, quis dolor non possimus. Temporibus, aliquid explicabo iste tempore sit quae ducimus nostrum consectetur itaque enim impedit unde doloremque mollitia aperiam sequi, delectus dolores doloribus fuga labore maiores rem? Iusto minima vitae quidem, fugiat dolor facere facilis delectus deserunt corrupti fugit accusamus quo odit ullam dolore, commodi iure sequi deleniti aperiam, amet asperiores iste? Repudiandae, eaque a. Voluptatibus sunt ad adipisci odio nobis id, eligendi corrupti ea vero sapiente?',
    price: 1700,
    stock: 20
}

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState ({})
    const [error, setError] = useState(false)

    useEffect(()=>{
        const productPromise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(item)
            }, 2000)
        })

        productPromise
        .then((res)=>{
            setProduct(item)
        })
        .catch((error)=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    })

    return (
        <div>
            <p>{loading ? 'Cargando, por favor espere...' : null}</p>
            <h4>{error ? 'No se encontró el producto, por favor intente nuevamente' : null}</h4>
            <ItemDetail product = {product}/>
        </div>
    )
}

export default ItemDetailContainer