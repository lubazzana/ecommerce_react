import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import { Container, Carousel } from 'react-bootstrap';
import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../Firebase'
import Spinner from 'react-bootstrap/Spinner'


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
            .catch(() => {
                toast.error('No se encuentran los productos, por favor intente nuevamente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
                setError(true)
            })
            .finally(()=>{
                setLoading(false)
            })

        } 
        else {
            getDocs(collection(db, "products"))
            .then((res) => setProducts(res.docs.map(p => ({...p.data(), id: p.id}))))
            .catch(() => {
                toast.error('No se encuentran los productos, por favor intente nuevamente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
                setError(true)
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        
    }, [category])
    return (
        <>
            <Container>
                <Carousel id="slider">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3898/large/roma_soy_yo.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3932/large/bonelli_hechizo_de_amor.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3928/large/banner_alguien_a_alguien_contarle_todo.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3937/large/Banner_Cuspide_Calles_1200x300.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3905/large/Diario_de_Pilar_en_India_Cuspide_01.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3968/large/202203_Gallant_Cuspide_01.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>

            <div>
                {loading && <Spinner animation="border" role="status"><span className="visually-hidden">Cargando...</span></Spinner> }
                {error && <p>Error al cargar la página, por favor intente nuevamente</p>}
            </div>
            
            <ItemList products = {products}/>
        </>
    )
}

export default ItemListContainer