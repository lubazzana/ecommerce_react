import React, {createContext, useState} from 'react'

export const CartContext = createContext()
const { Provider } = CartContext

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addItem = (product, cant) => {
        let cartProduct = {prod: product[0], cant}
        let cartAux = []
        let newTotal = total

        if(isInCart(product)) {
            cartProduct = cart.find(item => item.prod.id === product[0].id)
            cartProduct.cant += cant
            cartAux = [...cart]
            newTotal += cartProduct.cant * cartProduct.prod.price
        } else {
            cartAux = [cartProduct, ...cart]
            newTotal += cartProduct.cant * cartProduct.prod.price
        }

        setCart(cartAux)
        setTotal(newTotal)
    }

    const removeItem = (id) => {
        const cartAux = cart.filter(item => item.prod.id !== id)
        let prodCart = cart.filter(item => item.prod.id === id)[0]
        let newTotal = total
        
        newTotal -= prodCart.cant * prodCart.prod.price
        setCart(cartAux)
        setTotal(newTotal)
    }

    const clear = () => {
        setCart([])
        setTotal(0)
    }

    const isInCart = (product) => {
        return cart && cart.some(item => item.prod.id === product[0].id)
    }



    return (
        <Provider value={{ cart, addItem, removeItem, clear, total }}> {children} </Provider>
    )
}

export default CartContextProvider