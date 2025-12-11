import "./style.css"
import { Link } from "react-router-dom";


function Header() {

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo rond violet + texte */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <div className="logo-circle">J</div>
            <span className="logo-text">Portfolio</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className="nav-link active">Accueil</Link>
          <Link to="/projects" className="nav-link">Projets</Link>
          <Link to="/path" className="nav-link">Parcours</Link>
          <Link to="/skills" className="nav-link">Compétences</Link>
        </nav>

      </div>

    </header>
  );
}

export default Header;
