
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1>Pichulina Bakery y Café</h1>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Tienda</a></li>
                <li><a>Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;