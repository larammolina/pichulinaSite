
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1>Pichulina Bakery y Café</h1>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;