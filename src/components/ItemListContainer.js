import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'

import { toast } from "react-toastify";

import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../Firebase'

import './itemlistcontainer.css'


const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState ([])
    const [error, setError] = useState(false)
    const {category} = useParams()

    useEffect(()=>{

        if (category !== undefined) {
                
            const q = query(collection(db, "products"), where("category", "==", category))

            getDocs(q)
            .then((res) => setProducts(res.docs.map(prod => ({...prod.data(), id: prod.id}))))
            .catch((err => 
                toast.error('Error al cargar la página, por favor intente nuevamente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }),
                
                setError(true)
            ))
            .finally(()=>{
                setLoading(false)
            })

        } 
        else {
            getDocs(collection(db, "products"))
            .then((res) => setProducts(res.docs.map(p => ({...p.data(), id: p.id}))))
            .catch((err => 
                toast.error('Error al cargar la página, por favor intente nuevamente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }),
                
                setError(true)
            ))
            .finally(()=>{
                setLoading(false)
            })
        }
        
    }, [category])
    return (
        <>
            <h1>{props.greeting}</h1>
            <p>{loading && 'Cargando, por favor espere...'}</p>
            <ItemList products = {products}/>
        </>
    )
}

export default ItemListContainer