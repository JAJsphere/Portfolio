import "./Parcours.css";
import "../Global/GlobalHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faGraduationCap, faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Parcours() {
    return (
        <div>

            {/* ── HEADER ── */}
            <section className="ParcoursHeader">

                <div className="ParcoursHeaderBg">
                    <div className="ParcoursHeaderBgCarte ParcoursHeaderBgCarte--1">
                        <div className="ParcoursHeaderBgCarteIcone" style={{ background: "linear-gradient(135deg, #4f46e5, #818cf8)" }}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className="ParcoursHeaderBgCarteLignes"><div /><div /><div /></div>
                    </div>
                    <div className="ParcoursHeaderBgCarte ParcoursHeaderBgCarte--2">
                        <div className="ParcoursHeaderBgCarteIcone" style={{ background: "linear-gradient(135deg, #38bdf8, #0ea5e9)" }}>
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <div className="ParcoursHeaderBgCarteLignes"><div /><div /><div /></div>
                    </div>
                    <div className="ParcoursHeaderBgCarte ParcoursHeaderBgCarte--3">
                        <div className="ParcoursHeaderBgCarteIcone" style={{ background: "linear-gradient(135deg, #34d399, #10b981)" }}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className="ParcoursHeaderBgCarteLignes"><div /><div /><div /></div>
                    </div>
                    <div className="ParcoursHeaderBgCarte ParcoursHeaderBgCarte--4">
                        <div className="ParcoursHeaderBgCarteIcone" style={{ background: "linear-gradient(135deg, #f472b6, #db2777)" }}>
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <div className="ParcoursHeaderBgCarteLignes"><div /><div /><div /></div>
                    </div>
                </div>

                
                <div className="ParcoursHeaderInner">
                    <p className="ParcoursHeaderLabel">━ Mon parcours ━</p>
                    <div className="ParcoursHeaderTitreWrap">
                        <span className="ParcoursHeaderIcone"><FontAwesomeIcon icon={faGraduationCap} /></span>
                        <h1 className="ParcoursHeaderTitre">
                            Mon <span className="ParcoursHeaderTitreAccent">parcours</span><br />
                            académique
                        </h1>
                        <span className="ParcoursHeaderIcone ParcoursHeaderIcone--delayed"><FontAwesomeIcon icon={faBriefcase} /></span>
                    </div>
                    <p className="ParcoursHeaderSousTitre">Formations, expériences et certifications</p>
                </div>
            </section>

            {/* ── CONTENU ── */}
            <div className="Parcours-container">

                {/* Formations */}
                <div className="Parcours-section">
                    <h2>
                        <FontAwesomeIcon icon={faBookOpen} className="Parcours-section-icon" /> Formations
                    </h2>

                    <div className="Parcours-card">
                        <div className="Parcours-card-header">
                            <h3>BTS SIO SLAM</h3>
                            <span className="Parcours-card-dates">2024 - Présent</span>
                        </div>
                        <p className="Parcours-card-school">Lycée / École de Formation</p>
                        <p className="Parcours-card-desc">
                            Formation axée sur le développement web et mobile, la conception de solutions logicielles et la gestion de projets, avec des travaux pratiques et projets concrets.
                        </p>
                        <div className="Parcours-card-tags">
                            <span className="Parcours-tag">Web</span>
                            <span className="Parcours-tag">Programmation</span>
                            <span className="Parcours-tag">Bases de Données</span>
                            <span className="Parcours-tag">Gestion de Projet</span>
                        </div>
                    </div>

                    <div className="Parcours-card">
                        <div className="Parcours-card-header">
                            <h3>Baccalauréat Général</h3>
                            <span className="Parcours-card-dates">2020 - 2023</span>
                        </div>
                        <p className="Parcours-card-school">Lycée Général et Technologique</p>
                        <div className="Parcours-card-desc">
                            <ul>
                                <li>Terminale : Spécialités Numérique et Sciences de l'Informatique, Anglais Monde Contemporain – Option Maths Complémentaires</li>
                                <li>1ère : Spécialités Numérique et Sciences de l'Informatique, Anglais Monde Contemporain, Sciences Économiques et Sociales – Option Maths Complémentaires</li>
                            </ul>
                        </div>
                        <div className="Parcours-card-tags">
                            <span className="Parcours-tag">Informatique</span>
                            <span className="Parcours-tag">Programmation</span>
                            <span className="Parcours-tag">Histoire en Anglais</span>
                            <span className="Parcours-tag">Mathématiques</span>
                        </div>
                    </div>
                </div>

                {/* Expériences */}
                <div className="Parcours-experiences-section">
                    <h2 className="Parcours-experiences-title">
                        <FontAwesomeIcon icon={faGraduationCap} className="Parcours-section-icon" />
                        Expériences Professionnelles
                    </h2>

                    <div className="Parcours-exp-card">
                        <div className="Parcours-exp-top Parcours-exp-purple">
                            <FontAwesomeIcon icon={faLaptopCode} className="Parcours-exp-top-icon" />
                        </div>
                        <div className="Parcours-exp-content">
                            <div className="Parcours-exp-header">
                                <h3 className="Parcours-exp-title">Stage - Développement WEB</h3>
                                <span className="Parcours-exp-dates">Janvier 2026 - Février 2026</span>
                            </div>
                            <p className="Parcours-exp-company">Cisa Informatique / Bourg-en-Bresse</p>
                            <span className="Parcours-exp-type">Stage</span>
                            <p className="Parcours-exp-desc">
                                Participation au développement d'un ERP web en cours de conception, destiné à être commercialisé auprès de clients.
                            </p>
                            <ul className="Parcours-exp-list">
                                <li>Création et gestion de tables dans la base de données à l'aide du langage C# et d'outils SQL.</li>
                                <li>Conception et mise en page de documents commerciaux avec DevExpress XtraReports (factures, bons de livraison, devis, commandes) à partir de données issues de plusieurs bases.</li>
                                <li>Création de tableaux de bord pour les clients dans leur ERP : développement de requêtes SQL et mise en place d'éléments visuels (widgets, graphiques, cartes) à partir des données de la base.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="Parcours-exp-card">
                        <div className="Parcours-exp-top Parcours-exp-purple">
                            <FontAwesomeIcon icon={faLaptopCode} className="Parcours-exp-top-icon" />
                        </div>
                        <div className="Parcours-exp-content">
                            <div className="Parcours-exp-header">
                                <h3 className="Parcours-exp-title">Stage - Développement WEB</h3>
                                <span className="Parcours-exp-dates">Mai 2025 - Juillet 2025</span>
                            </div>
                            <p className="Parcours-exp-company">JPV Chausseur / Bourg-en-Bresse</p>
                            <span className="Parcours-exp-type">Stage</span>
                            <p className="Parcours-exp-desc">
                                Développement d'un site vitrine pour présenter les produits et services du magasin, en travaillant de manière autonome et en suivant un processus complet de conception.
                            </p>
                            <ul className="Parcours-exp-list">
                                <li>Recueil des informations et création d'un mini cahier des charges directement chez le client</li>
                                <li>Recherche d'inspiration et création de prototypes visuels</li>
                                <li>Développement complet du site en HTML/CSS et présentation de plusieurs versions au client pour validation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="Parcours-exp-card">
                        <div className="Parcours-exp-top Parcours-exp-blue">
                            <FontAwesomeIcon icon={faBriefcase} className="Parcours-exp-top-icon" />
                        </div>
                        <div className="Parcours-exp-content">
                            <div className="Parcours-exp-header">
                                <h3 className="Parcours-exp-title">Stage - King Jouet</h3>
                                <span className="Parcours-exp-dates">2020</span>
                            </div>
                            <p className="Parcours-exp-company">King Jouet / Bourg-en-Bresse (1 Semaine)</p>
                            <span className="Parcours-exp-type">Stage</span>
                            <p className="Parcours-exp-desc">
                                Durant ce stage, j'ai découvert le fonctionnement d'un magasin et participé activement à la gestion des rayons et au conseil client.
                            </p>
                            <ul className="Parcours-exp-list">
                                <li>Mise en rayon et agencement des produits</li>
                                <li>Étiquetage et vérification des articles</li>
                                <li>Accueil et conseil des clients</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="Parcours-certifications-section">
                    <h2 className="Parcours-certifications-title">Certifications</h2>
                    <div className="Parcours-certifications-list">

                        <div className="Parcours-certification-card">
                            <div className="Parcours-certification-left">
                                <img src="https://www.auditsi.eu/wp-content/uploads/2018/06/anssi_visuel_square500.png" alt="Anssi Logo" className="Parcours-certification-icon" />
                                <div>
                                    <h3>Certification - Cybersécurité</h3>
                                    <p className="Parcours-certification-org">SECNUM MOOC ANSSI</p>
                                </div>
                            </div>
                            <span className="Parcours-certification-year">2024</span>
                        </div>

                        <div className="Parcours-certification-card">
                            <div className="Parcours-certification-left">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pix_logo.svg/1200px-Pix_logo.svg.png" alt="PIX Logo" className="Parcours-certification-icon" />
                                <div>
                                    <h3>Certification - Bases de l'informatique</h3>
                                    <p className="Parcours-certification-org">PIX</p>
                                </div>
                            </div>
                            <span className="Parcours-certification-year">2022</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}