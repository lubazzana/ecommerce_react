import ItemListContainer  from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenid@s a Atlas!"/>} />
            <Route path='/category/:category' element={<ItemListContainer greeting="Bienvenid@s a Atlas!"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    )
}
export default Main