import "./style.css";

function Accueil() {
    return (
        <div>
            {/* Partie ACCUEIL -> Nom/Prénom */}
            <section className="accueil-main">
                <p className="accueil-main-bts-title">━ BTS SIO SLAM ━</p>

                <h1 className="accueil-main-title">
                    Jade <span>Vieux</span>
                </h1>

                <h2 className="accueil-main-subtitle">
                    Développeuse WEB & Spécialiste Solutions Logicielles
                </h2>

                {/* Petit symbole de séparation du texte et des boutons (auto_awesome -> étoile) */}
                <div className="accueil-main-separator">
                    <span className="material-symbols-outlined animated-icon">auto_awesome</span>
                </div>

                {/* Boutons du header de l'accueil */}
                <div className="accueil-main-buttons">
                    <button className="accueil-main-btn accueil-main-btn-purple">
                        Voir mes projets →
                    </button>
                    <button className="accueil-main-btn accueil-main-btn-white">
                        Mon parcours →
                    </button>
                </div>
            </section>

            {/* Partie "À propos de moi" */}a
            <section className="accueil-about">
                <div className="about-container">
                    <h2 className="accueil-about-title">A propos de moi</h2>

                    <p className="accueil-about-text">
                        Je suis un étudiant passionné en BTS SIO option SLAM, en pleine
                        formation pour devenir développeur créatif et spécialisé dans les
                        solutions logicielles. Mon parcours m’a permis d’acquérir des bases
                        solides en développement web et mobile, ainsi qu’une expérience
                        concrète grâce à différents projets professionnels.
                    </p>

                    <p className="accueil-about-text">
                        J’aime créer des applications utiles, modernes et pensées pour les
                        utilisateurs. Je m’adapte rapidement aux nouvelles technologies et
                        j’apprends continuellement pour développer des solutions fiables,
                        performantes et adaptées aux besoins réels des entreprises.
                    </p>
                    <p className="accueil-about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula
                        at augue finibus interdum. Integer vehicula, ipsum sit amet tristique
                        tincidunt, tortor urna porttitor arcu, sit amet auctor justo risus sed
                        odio. Quisque placerat, massa sed cursus aliquet, est lacus vestibulum
                        velit, vitae blandit leo elit vitae lorem.
                    </p>

                    <p className="accueil-about-text">
                        Curabitur id fermentum turpis. Nullam sodales purus sit amet lectus
                        lobortis, at vehicula arcu bibendum. Suspendisse potenti. Fusce dapibus
                        ultricies orci, ut dignissim sem fringilla nec. Sed quis velit et tortor
                        semper luctus. Praesent facilisis, massa at laoreet semper, risus felis
                        consequat ipsum, eu tristique ex nibh et libero.
                    </p>
                    <p className="accueil-about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula
                        at augue finibus interdum. Integer vehicula, ipsum sit amet tristique
                        tincidunt, tortor urna porttitor arcu, sit amet auctor justo risus sed
                        odio. Quisque placerat, massa sed cursus aliquet, est lacus vestibulum
                        velit, vitae blandit leo elit vitae lorem.
                    </p>
                </div>
            </section>

            <section className="accueil-explorer">
                <h2 className="accueil-explorer-title">Explorer mon univers</h2>
                <div className="explorer-cards">
                    <div className="explorer-card">
                        <span className="material-symbols-outlined explorer-icon purple">work</span>
                        <h3 className="explorer-card-title">Projets</h3>
                        <p className="explorer-card-text">Découvrez mes réalisations et les technologies que j'ai maîtrisées.</p>
                        <a href="#projets" className="explorer-card-link">Voir plus →</a>
                    </div>
                    <div className="explorer-card">
                        <span className="material-symbols-outlined explorer-icon blue">school</span>
                        <h3 className="explorer-card-title">Parcours</h3>
                        <p className="explorer-card-text">Mon histoire académique et mes expériences professionnelles.</p>
                        <a href="#parcours" className="explorer-card-link">En savoir plus →</a>
                    </div>
                    <div className="explorer-card">
                        <span className="material-symbols-outlined explorer-icon purple">bolt</span>
                        <h3 className="explorer-card-title">Compétences</h3>
                        <p className="explorer-card-text">Mes compétences techniques et mes domaines d'expertise.</p>
                        <a href="#competences" className="explorer-card-link">Découvrir →</a>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Accueil;
