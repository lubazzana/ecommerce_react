import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import CartContextProvider from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';


function App () {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
                
                <ToastContainer/>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App