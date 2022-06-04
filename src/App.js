import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tienda from './components/Pages/Tienda/Tienda'
import Inicio from './components/Pages/Inicio/Inicio'
import Contacto from './components/Pages/Contacto/Contacto'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />}>

          </Route>
          <Route exact path="/Tienda" element={<Tienda />} >
            
          </Route>
          <Route exact path="/Contacto" element={<Contacto />}>
            
          </Route>
        </Routes>

      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App;
