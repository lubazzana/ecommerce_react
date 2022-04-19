import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import { Container, Carousel } from 'react-bootstrap';
import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../Firebase'


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
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <p>{loading && 'Cargando, por favor espere...'}</p>
            <ItemList products = {products}/>
        </>
    )
}

export default ItemListContainer