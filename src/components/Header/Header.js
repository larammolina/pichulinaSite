
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const Header = () => {
    return (
       <> 
      <NavBar />
      <ItemListContainer greeting="Bienvenido"/>
      </>
    )
}

export default Header;