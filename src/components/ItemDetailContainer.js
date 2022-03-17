import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {prodLibros} from './ItemListContainer'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState ([])
    const [error, setError] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        const productPromise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(prodLibros)
            }, 2000)
        })

        productPromise
        .then((res)=>{
            // res.forEach(element => {
            //    element.id === parseInt(id) && console.log(element); 
            // });
            let result = res.filter(product => {
                return product.id === parseInt(id); 
            })
            setProduct(result);
        })
        .catch((error)=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [id])

    return (
        <div>
            {loading ? <p>Cargando, por favor espere...</p> : <ItemDetail product={product} />}
            <h4>{error ? 'No se encontró el producto, por favor intente nuevamente' : null}</h4>
        </div>
    )
}

export default ItemDetailContainer