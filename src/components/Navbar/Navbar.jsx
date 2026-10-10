import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  const estiloLink = ({ isActive }) => (isActive ? "link ativo" : "link");

  return (
    <header className="navbar">
      <NavLink to="/">
        <img src="/logo-texto.svg" alt="CineCatálogo" className="logo" />
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={estiloLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/busca" className={estiloLink}>
              Busca
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoritos" className={estiloLink}>
              Favoritos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
