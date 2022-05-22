
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1>Pichulina Bakery y Café</h1>
            <ul>
                <li>Inicio</li>
                <li>Tienda</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;