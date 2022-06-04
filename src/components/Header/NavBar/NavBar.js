
import './NavBar.css'
import CartWidget from '../../CartWidget/CartWidget'
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <Link to='/' >Inicio</Link>
            <Link to='/tienda' >Tienda</Link>
            <Link to='/contacto' >Contacto</Link>
            <CartWidget />
        </nav>
    )
}

export default NavBar;