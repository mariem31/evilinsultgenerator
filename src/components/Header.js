import { NavLink } from "react-router-dom";
import './Header.css';

const Header  = () => {
  return (
  <div>
    <header>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/accueil'>
            <p>Accueil</p>
          </NavLink>
    </header> 
  </div>
  )
}

export default Header;
