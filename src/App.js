import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App () {
    return (
        <BrowserRouter>
            <Navbar/>
            
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Bienvenid@s a Atlas!"/>} />
                <Route path='/category/:category' element={<ItemListContainer greeting="Bienvenid@s a Atlas!"/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>

            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App