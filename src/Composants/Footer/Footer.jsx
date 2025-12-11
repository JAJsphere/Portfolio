import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT: Contact */}
        <div className="footer-left">
          <h2 className="footer-title">Mon projet le plus ambitieux</h2>
          <p className="footer-desc">
            Découvrez ci-dessous le projet le plus ambitieux que j’ai eu l’occasion de réaliser.
          </p>


          {/* Le bouton du footer utilise la même classe que les boutons de l'accueil, ça explique le nom de la classe */}
          <button className="accueil-main-btn accueil-main-btn-purple"> 
            Découvrir →
          </button>

          <div className="footer-logo">
            <div className="logo-circle">J</div>
            <span className="logo-text">Portfolio</span>
          </div>

          <p className="footer-role">
            Développeuse WEB & Spécialiste Solutions
          </p>
        </div>

        {/* RIGHT: Navigation */}
        <div className="footer-right">
          <h3 className="footer-nav-title">Navigation</h3>

          <div className="footer-nav-columns">
            <div className="footer-col">
              <Link to="/" className="footer-link">Accueil</Link>
              <Link to="/path" className="footer-link">Parcours</Link>
            </div>

            <div className="footer-col">
              <Link to="/projects" className="footer-link">Projets</Link>
              <Link to="/skills" className="footer-link">Compétences</Link>
            </div>
          </div>

          {/* Social icons */}
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>

      <p className="footer-copy">© 2025 BTS SIO Portfolio<br />Tous droits réservés</p>

    </footer>
  );
}

export default Footer;