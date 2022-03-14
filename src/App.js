import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

import './App.css';

function App () {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting="Bienvenid@s a Atlas!"/>
            <ItemDetailContainer />
        </>
    )
}

export default App