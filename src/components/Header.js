import { NavLink } from "react-router-dom";

const Header  = () => {
  return (
  <div>
    <header className="header" >
      <ul>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/accueil'>
          <li>Accueil</li>
        </NavLink>
     </ul>
    </header> 
  </div>
  )
}

export default Header;
