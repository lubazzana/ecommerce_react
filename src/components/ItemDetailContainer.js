import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../Firebase'
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState ({})
    const [error, setError] = useState(false)
    const {id} = useParams()

    useEffect(()=>{

        const docRef = doc(db, "products", id);
        getDoc(docRef)
        .then((res)=> setProduct(res.data()))
        .catch((err => 
            toast.error('No se encontró el producto, por favor intente nuevamente', {
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
    
    },[id])


    return (
        <div>
            {loading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner> 
            : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer