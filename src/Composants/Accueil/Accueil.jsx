import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Accueil() {

    const navigate = useNavigate();

    return (
        <div>

            {/* ─── HERO ─── */}
            <section className="accueil-hero">

                {/* Fond lignes diagonales */}
                <div className="accueil-hero-bg" />


                {/* Japon — grande branche de cerisier */}
                <div className="accueil-hero-deco accueil-hero-deco--1">
                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 140 Q50 110 75 85 Q100 60 130 25" stroke="#f9a8d4" strokeWidth="4" strokeLinecap="round" fill="none" />
                        <path d="M75 85 Q65 60 80 40" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M75 85 Q100 90 115 75" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M50 110 Q35 95 45 75" stroke="#f9a8d4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M100 60 Q120 55 125 40" stroke="#f9a8d4" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        {/* Fleur 1 */}
                        <circle cx="80" cy="40" r="9" fill="#fce7f3" />
                        <circle cx="80" cy="40" r="5" fill="#f472b6" />
                        <circle cx="72" cy="33" r="6" fill="#fce7f3" />
                        <circle cx="88" cy="33" r="6" fill="#fce7f3" />
                        <circle cx="72" cy="47" r="6" fill="#fce7f3" />
                        <circle cx="88" cy="47" r="6" fill="#fce7f3" />
                        {/* Fleur 2 */}
                        <circle cx="115" cy="75" r="8" fill="#fce7f3" />
                        <circle cx="115" cy="75" r="4" fill="#f472b6" />
                        <circle cx="107" cy="68" r="5.5" fill="#fce7f3" />
                        <circle cx="123" cy="68" r="5.5" fill="#fce7f3" />
                        <circle cx="107" cy="82" r="5.5" fill="#fce7f3" />
                        <circle cx="123" cy="82" r="5.5" fill="#fce7f3" />
                        {/* Fleur 3 */}
                        <circle cx="45" cy="75" r="8" fill="#fce7f3" />
                        <circle cx="45" cy="75" r="4" fill="#f472b6" />
                        <circle cx="37" cy="68" r="5.5" fill="#fce7f3" />
                        <circle cx="53" cy="68" r="5.5" fill="#fce7f3" />
                        <circle cx="37" cy="82" r="5.5" fill="#fce7f3" />
                        <circle cx="53" cy="82" r="5.5" fill="#fce7f3" />
                        {/* Fleur 4 */}
                        <circle cx="130" cy="25" r="7" fill="#fce7f3" />
                        <circle cx="130" cy="25" r="3.5" fill="#f472b6" />
                        <circle cx="123" cy="19" r="5" fill="#fce7f3" />
                        <circle cx="137" cy="19" r="5" fill="#fce7f3" />
                        <circle cx="123" cy="31" r="5" fill="#fce7f3" />
                        <circle cx="137" cy="31" r="5" fill="#fce7f3" />
                        {/* Fleur 5 */}
                        <circle cx="125" cy="40" r="6" fill="#fce7f3" />
                        <circle cx="125" cy="40" r="3" fill="#f472b6" />
                        <circle cx="119" cy="35" r="4" fill="#fce7f3" />
                        <circle cx="131" cy="35" r="4" fill="#fce7f3" />
                        {/* Pétales tombants */}
                        <ellipse cx="60" cy="120" rx="4" ry="6" fill="#f9a8d4" opacity="0.55" transform="rotate(-20 60 120)" />
                        <ellipse cx="95" cy="130" rx="3.5" ry="5.5" fill="#f9a8d4" opacity="0.45" transform="rotate(15 95 130)" />
                        <ellipse cx="35" cy="135" rx="3" ry="5" fill="#f9a8d4" opacity="0.4" transform="rotate(-10 35 135)" />
                        <ellipse cx="115" cy="115" rx="3" ry="5" fill="#f9a8d4" opacity="0.5" transform="rotate(25 115 115)" />
                    </svg>
                </div>

                {/* Code — écran PC */}
                <div className="accueil-hero-deco accueil-hero-deco--2">
                    <div className="accueil-hero-deco-pc">
                        <div className="accueil-hero-deco-pc-ecran">
                            <div className="accueil-hero-deco-pc-topbar">
                                <span /><span /><span />
                            </div>
                            <div className="accueil-hero-deco-pc-code">
                                <div style={{ width: "60%", background: "#818cf8" }} />
                                <div style={{ width: "80%", background: "#60a5fa" }} />
                                <div style={{ width: "45%", background: "#a78bfa" }} />
                                <div style={{ width: "70%", background: "#818cf8" }} />
                                <div style={{ width: "55%", background: "#60a5fa" }} />
                                <div style={{ width: "85%", background: "#a78bfa" }} />
                            </div>
                        </div>
                        <div className="accueil-hero-deco-pc-pied" />
                        <div className="accueil-hero-deco-pc-base" />
                    </div>
                </div>

                {/* Créativité — ampoule avec étincelles */}
                <div className="accueil-hero-deco accueil-hero-deco--3">
                    <div className="accueil-hero-deco-creativity">
                        <div className="accueil-hero-deco-creativity-bulb">
                            <i className="fa-solid fa-lightbulb" />
                        </div>
                        <div className="accueil-hero-deco-creativity-sparks">
                            <span className="accueil-hero-deco-spark accueil-hero-deco-spark--1">✦</span>
                            <span className="accueil-hero-deco-spark accueil-hero-deco-spark--2">✦</span>
                            <span className="accueil-hero-deco-spark accueil-hero-deco-spark--3">✦</span>
                        </div>
                        <div className="accueil-hero-deco-creativity-tags">
                            <span>Créer</span>
                            <span>Imaginer</span>
                        </div>
                    </div>
                </div>

                {/* Aide — cœur avec mains */}
                <div className="accueil-hero-deco accueil-hero-deco--4">
                    <div className="accueil-hero-deco-aide">
                        <div className="accueil-hero-deco-aide-icon">
                            <i className="fa-solid fa-hands-holding-heart" />
                        </div>
                        <div className="accueil-hero-deco-aide-tags">
                            <span>Partager</span>
                            <span>Aider</span>
                        </div>
                    </div>
                </div>

                

                <div className="accueil-hero-inner">
                    <p className="accueil-hero-label">━ BTS SIO SLAM ━</p>

                    <div className="accueil-hero-title-wrap">
                        <span className="accueil-hero-star">✦</span>
                        <h1 className="accueil-hero-title">
                            Jade <span className="accueil-hero-title-span">Vieux</span>
                        </h1>
                        <span className="accueil-hero-star accueil-hero-star--delayed">✦</span>
                    </div>

                    <p className="accueil-hero-subtitle">
                        Étudiante en développement Web
                    </p>

                    <div className="accueil-hero-buttons">

                        <button
                            className="accueil-btn accueil-btn--primary"
                            onClick={() => navigate("/Projets")}
                        >
                            Voir mes projets →
                        </button>

                        <button
                            className="accueil-btn accueil-btn--secondary"
                            onClick={() => navigate("/Parcours")}
                        >
                            Mon parcours →
                        </button>

                    </div>
                </div>
            </section>


            {/* ─── À PROPOS ─── */}
            <section className="accueil-about">
                <div className="accueil-about-inner">

                    <div className="accueil-about-left">
                        <div className="accueil-about-heading">
                            <span className="accueil-about-heading-line" />
                            <p className="accueil-about-heading-text">À propos de moi</p>
                        </div>
                        <h2 className="accueil-about-title">
                            Passionnée par le <span className="accueil-about-title-highlight">développement web</span>
                        </h2>

                        {/* Stats */}
                        <div className="accueil-about-stats">
                            <div className="accueil-about-stat">
                                <span className="accueil-about-stat-value">2</span>
                                <span className="accueil-about-stat-label">Années de<br />formation</span>
                            </div>
                            <div className="accueil-about-stat">
                                <span className="accueil-about-stat-value">6+</span>
                                <span className="accueil-about-stat-label">Projets<br />réalisés</span>
                            </div>
                            <div className="accueil-about-stat">
                                <span className="accueil-about-stat-value">3</span>
                                <span className="accueil-about-stat-label">Stages<br />effectués</span>
                            </div>
                        </div>
                    </div>

                    <div className="accueil-about-right">

                        <p className="accueil-about-text">
                            <span>Étudiante en <strong>BTS SIO option SLAM</strong></span>, je suis très curieuse et investie dans
                            le <strong>développement Web</strong>. Mon intérêt pour ce domaine a commencé dès le collège, avec certains
                            jeux vidéo comme <strong>Minecraft</strong> qui m’ont vraiment marquée. Je voulais comprendre comment créer mes
                            propres serveurs et plugins pour ces jeux (un plugin, c’est un petit programme qui ajoute ou modifie des
                            fonctionnalités dans le jeu). Manipuler ces outils m’a donné un premier aperçu du développement et m’a poussée
                            à explorer davantage ce domaine.
                        </p>

                        <p className="accueil-about-text"><span>Au lycée</span>, les cours de
                            <strong> SNT (Sciences numériques et Technologie)</strong> m’ont ouvert une nouvelle facette du développement,
                            plus réaliste et accessible : le <strong>développement Web</strong>. J’ai pu créer mes premiers sites en
                            <strong> HTML</strong> et <strong>CSS</strong>, et j’ai choisi la spécialité <strong>NSI</strong> dès la 1ère pour
                            approfondir mes connaissances. J’ai exploré des langages comme <strong>Python</strong>, mais ce n’était pas évident
                            pour moi à ce moment-là. Cependant, cette curiosité ne m’a jamais quittée et m’a menée au <strong>BTS SIO</strong>.
                        </p>

                        <p className="accueil-about-text"><span>Ici</span>, j’ai découvert <strong>C#</strong>, qui m’a permis de plonger plus
                            profondément dans la programmation Web. J’ai rapidement accroché et, durant ma première année, j’ai senti une vraie
                            progression. Cependant, la deuxième année a été plus compliquée : certaines parties techniques me semblaient abstraites
                            et difficiles à comprendre. La programmation pure n’est peut-être pas ce qui me passionne le plus, mais j’adore créer
                            des sites, en particulier des <strong>sites vitrines</strong>. J’adore pouvoir concrétiser les idées qui me passent par
                            la tête, car je sais que j’ai les capacités pour le faire. Cela me pousse naturellement à me concentrer sur le <strong>front-end</strong>.
                        </p>

                        <p className="accueil-about-text"><span>Au fil des années</span>, j’ai exploré de nombreux langages et
                            bibliothèques : <strong>HTML, CSS, JavaScript, React, C#, PHP, Angular, SQL</strong>. J’ai donc des bases solides
                            pour le <strong>développement web</strong>, principalement côté interface, avec la possibilité d’intervenir sur le
                            back-end si nécessaire. Je me verrais bien continuer dans l’informatique et trouver ma place dans le domaine
                            du <strong>front-end</strong>, mais si ce n’est pas le cas, je garderai toujours l’envie de concevoir des sites web,
                            car je ne manquerai jamais d’idées ni de projets à réaliser.
                        </p>


                        <div className="accueil-about-tags">
                            <span className="accueil-about-tag"><i className="fa-brands fa-react" /> React</span>
                            <span className="accueil-about-tag"><i className="fa-solid fa-file-code" /> C#</span>
                            <span className="accueil-about-tag"><i className="fa-brands fa-js" /> JavaScript</span>
                            <span className="accueil-about-tag"><i className="fa-brands fa-angular" /> Angular</span>
                            <span className="accueil-about-tag"><i className="fa-brands fa-html5" /> HTML / CSS</span>
                            <span className="accueil-about-tag"><i className="fa-brands fa-mysql" /> SQL</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* ─── EXPLORER ─── */}
            <section className="accueil-explorer">

                <p className="accueil-section-label">Explorer mon univers</p>
                <h2 className="accueil-explorer-title">
                    Tout ce que vous pouvez <span className="accueil-about-title-highlight">découvrir</span>
                </h2>

                <div className="accueil-explorer-cards">
                    <div className="accueil-explorer-card">
                        <div className="accueil-explorer-card-icon">
                            <i className="fa-solid fa-folder-open" />
                        </div>
                        <h3 className="accueil-explorer-card-title">Projets</h3>
                        <p className="accueil-explorer-card-text">
                            Découvrez mes réalisations et les technologies que j'ai maîtrisées au fil du temps.
                        </p>

                        <button
                            className="accueil-explorer-card-link"
                            onClick={() => navigate("/Projets")}
                        >
                            Voir mes projets →
                        </button>

                    </div>

                    <div className="accueil-explorer-card">
                        <div className="accueil-explorer-card-icon">
                            <i className="fa-solid fa-graduation-cap" />
                        </div>
                        <h3 className="accueil-explorer-card-title">Parcours</h3>
                        <p className="accueil-explorer-card-text">
                            Mon parcours scolaire et mes expériences professionnelles.
                        </p>
                        <button
                            className="accueil-explorer-card-link"
                            onClick={() => navigate("/Parcours")}
                        >
                            En savoir plus →
                        </button>
                    </div>

                    <div className="accueil-explorer-card">
                        <div className="accueil-explorer-card-icon">
                            <i className="fa-solid fa-bolt" />
                        </div>
                        <h3 className="accueil-explorer-card-title">Compétences</h3>
                        <p className="accueil-explorer-card-text">
                            Mes compétences techniques, transversales et linguistiques développées depuis le début de mon parcours scolaire.
                        </p>
                        <button
                            className="accueil-explorer-card-link"
                            onClick={() => navigate("/Competences")}
                        >
                            Découvrir →
                        </button>
                    </div>
                </div>

            </section>

        </div>
    );
}
