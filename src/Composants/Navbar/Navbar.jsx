import "./style.css"
import { Link, NavLink, useLocation  } from "react-router-dom";


export default function Navbar() {

  const location = useLocation(); // hook pour récupérer la route actuelle


  return (
    <header className="header">
      <div className="header-container">

        {/* Logo rond violet + texte */}
        <NavLink to="/" className="logo-link">
          <div className="logo-circle">J</div>
          <span className="logo-text">Portfolio</span>
        </NavLink>

        {/* Navigation */}
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/Projets"
            className={() =>
              location.pathname.startsWith("/Projets") ? "nav-link active" : "nav-link"
            }
          >
            Projets
          </NavLink>

          <NavLink
            to="/Parcours"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Parcours
          </NavLink>

          <NavLink
            to="/Competences"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Compétences
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

