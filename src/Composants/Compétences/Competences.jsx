import { FaProjectDiagram, FaUsers, FaLightbulb, FaFontAwesomeFlag } from "react-icons/fa";
import './Competences.css';
import { useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Competences() {

    const [popupOuverte, setPopupOuverte] = useState(false);

    const competences_stage = [
        { iconeClasse: "fa-solid fa-arrows-spin", titre: "Méthodologies Agiles", description: "Immersion totale dans un workflow Scrum : participation aux Daily Scrums, planification de sprints, et utilisation de Jira pour le suivi des tickets et du backlog.", tags: ["Scrum", "Jira", "Sprint planning"] },
        { iconeClasse: "fa-solid fa-code-branch", titre: "DevOps & Versioning", description: "Utilisation quotidienne de Git en équipe : branches, pull requests, revues de code. Découverte des pipelines CI/CD et des bonnes pratiques de gestion de versions.", tags: ["Git", "GitHub", "CI/CD", "Git Flow"] },
        { iconeClasse: "fa-solid fa-circle-check", titre: "Qualité & Tests", description: "Apprentissage des tests unitaires et d'intégration. Rédaction de cas de tests, gestion des bugs via des outils de tracking, et participation aux phases de recette.", tags: ["Tests unitaires", "Recette", "Debugging"] },
        { iconeClasse: "fa-solid fa-people-group", titre: "Soft Skills en Entreprise", description: "Communication technique avec l'équipe, rédaction de documentation pour les nouveaux arrivants, et présentation de travaux en fin de sprint (Demo).", tags: ["Documentation", "Présentation", "Travail d'équipe"] },
        { iconeClasse: "fa-solid fa-layer-group", titre: "Architecture & Conception", description: "Découverte de l'architecture en couches et des patterns utilisés en entreprise. Lecture et compréhension de code existant sur une base de code large.", tags: ["Clean code", "Architecture", "Code review"] },
        { iconeClasse: "fa-solid fa-comment-dots", titre: "Communication Client", description: "Participation à des réunions avec les parties prenantes, reformulation des besoins métier en tâches techniques, et reporting de l'avancement.", tags: ["Réunions", "Reporting", "Besoins métier"] },
    ];

    const competences_informatiques = [
        { nom: "HTML5", description: "Structure et contenu", niveau: "Confirmée", progression: 85, iconeClasse: "fa-brands fa-html5" },
        { nom: "CSS3", description: "Design et interface moderne", niveau: "Confirmée", progression: 85, iconeClasse: "fa-brands fa-css3-alt" },
        { nom: "JavaScript", description: "Comportement et interactivité", niveau: "Exploratrice", progression: 40, iconeClasse: "fa-brands fa-js" },
        { nom: "React", description: "Composants dynamiques", niveau: "Navigatrice", progression: 70, iconeClasse: "fa-brands fa-react" },
        { nom: "Angular", description: "Composants modulaires", niveau: "Exploratrice", progression: 40, iconeClasse: "fa-brands fa-angular" },
        { nom: "C#", description: "Back-end solide", niveau: "Navigatrice", progression: 60, iconeClasse: "fa-solid fa-file-code" },
        { nom: "SQL", description: "Bases de données et requêtes", niveau: "Navigatrice", progression: 60, iconeClasse: "fa-solid fa-database" },
        { nom: "PHP", description: "Back-end web", niveau: "Exploratrice", progression: 50, iconeClasse: "fa-brands fa-php" },
    ];

    const competences_transversales = [
        { nom: "Communication", desc: "Échanger clairement avec une équipe, des clients ou des parties prenantes.", icone: "fa-solid fa-comments" },
        { nom: "Travail en équipe", desc: "Collaborer efficacement sur des projets communs avec des profils variés.", icone: "fa-solid fa-people-group" },
        { nom: "Résolution de problèmes", desc: "Analyser une situation et proposer des solutions créatives et adaptées.", icone: "fa-solid fa-lightbulb" },
        { nom: "Gestion de projet", desc: "Organiser, planifier et suivre l'avancement d'un projet de bout en bout.", icone: "fa-solid fa-list-check" },
        { nom: "Apprentissage continu", desc: "Toujours curieuse, je m'adapte rapidement aux nouvelles technologies.", icone: "fa-solid fa-bolt" },
        { nom: "Leadership", desc: "Guider et motiver un groupe vers un objectif commun avec bienveillance.", icone: "fa-solid fa-bullseye" },
    ];

    const competences_langues = [
        { nom: "Français", description: "Langue maternelle", niveau: "Légende", progression: 100, drapeauClasse: "fi fi-fr" },
        { nom: "Anglais", description: "Langue secondaire", niveau: "Navigatrice", progression: 70, drapeauClasse: "fi fi-gb" },
        { nom: "Japonais", description: "Langue additionnelle", niveau: "Novice", progression: 5, drapeauClasse: "fi fi-jp" },
    ];



    // ── Graphique Chart.js ──
    const GraphiqueCompetences = ({ competences }) => {
        const chartRef = useRef(null);
        const [colonnes, setColonnes] = useState([]);

        const couleurParNiveau = (niveau) => {
            switch (niveau) {
                case "Confirmée": return "#34d399";
                case "Navigatrice": return "#0ea5e9";
                case "Exploratrice": return "#f97316";
                case "Novice": return "#fbbf24";
                default: return "#818cf8";
            }
        };

        const niveaux = [
            { label: "Confirmée", couleur: "#34d399", plage: "80–100%", icone: "fa-solid fa-star" },
            { label: "Navigatrice", couleur: "#38bdf8", plage: "60–79%", icone: "fa-solid fa-compass" },
            { label: "Exploratrice", couleur: "#f97316", plage: "40–59%", icone: "fa-solid fa-map" },
            { label: "Novice", couleur: "#fbbf24", plage: "0-39%", icone: "fa-solid fa-seedling" },
        ];

        const calculerPositions = () => {
            const chart = chartRef.current;
            if (!chart) return;
            const positions = competences.map((_, i) => ({
                left: chart.scales.x.getPixelForValue(i),
            }));
            setColonnes(positions);
        };

        const data = {
            labels: competences.map(c => c.nom),
            datasets: [{
                data: competences.map(c => c.progression),
                backgroundColor: competences.map(c => couleurParNiveau(c.niveau)),
                borderRadius: 12,
                borderSkipped: false,
                borderWidth: 0,
            }]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1200,
                easing: "easeOutQuart",
                onComplete: calculerPositions,
            },
            onResize: calculerPositions,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            const c = competences[ctx.dataIndex];
                            return ` ${c.progression}% — ${c.niveau}`;
                        }
                    },
                    backgroundColor: "#0b1220",
                    titleColor: "#ffffff",
                    bodyColor: "#a5b4fc",
                    padding: 12,
                    cornerRadius: 10,
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: { display: false }
                },
                y: {
                    min: 0, max: 100,
                    grid: { color: "rgba(0,0,0,0.04)" },
                    border: { display: false },
                    ticks: {
                        color: "#9ca3af",
                        font: { size: 12 },
                        callback: (v) => v + "%",
                        stepSize: 20,
                    }
                }
            }
        };

        return (
            <div className="competences-graphique-wrapper">

                <div className="competences-graphique-legende">
                    {niveaux.map(n => (
                        <div key={n.label} className="competences-graphique-legende-item" style={{ "--couleur": n.couleur }}>
                            <div className="competences-graphique-legende-icone" style={{ background: n.couleur + "22", color: n.couleur }}>
                                <i className={n.icone} />
                            </div>
                            <div className="competences-graphique-legende-texte">
                                <span className="competences-graphique-legende-label" style={{ color: n.couleur }}>{n.label}</span>
                                <span className="competences-graphique-legende-plage">{n.plage}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="competences-graphique-chart-wrap">
                    <Bar ref={chartRef} data={data} options={options} />

                    {/* Icônes positionnées absolument sous chaque barre */}
                    {colonnes.length > 0 && competences.map((c, i) => (
                        <div
                            key={c.nom}
                            className="competences-graphique-icone-abs"
                            style={{ left: colonnes[i].left }}
                        >
                            <i className={c.iconeClasse} style={{ color: couleurParNiveau(c.niveau) }} />
                            <span style={{ color: couleurParNiveau(c.niveau) }}>{c.nom}</span>
                        </div>
                    ))}
                </div>

            </div>
        );
    };



    // ── Carte langues ──
    const CarteCompetence = ({ competence }) => (
        <div className="competences-carte-skill">
            <div className="competences-carte-entete-skill">
                {competence.drapeauClasse ? (
                    <div className="competences-icone-skill">
                        <span className={competence.drapeauClasse}></span>
                    </div>
                ) : null}
                <div>
                    <h3 className="competences-titre-carte-skill">{competence.nom}</h3>
                    <p className="competences-desc-carte-skill">{competence.description}</p>
                </div>
            </div>
            <div className="competences-barre-skill">
                <div className="competences-barre-niveau-skill">
                    <span>{competence.niveau}</span>
                    <span>{competence.progression}%</span>
                </div>
                <div className="competences-barre-fond-skill">
                    <div className="competences-barre-remplie-skill" style={{ width: `${competence.progression}%` }} />
                </div>
            </div>
        </div>
    );

    // ── Carte transversales ──
    const CarteCompetenceGenerale = ({ competence }) => (
        <div className="competences-carte-generale">
            <div className="competences-carte-generale-icone-wrap">
                <i className={competence.icone} />
            </div>
            <h3 className="competences-titre-carte-generale">{competence.nom}</h3>
            <p className="competences-desc-carte-generale">{competence.desc}</p>
        </div>
    );



    return (
        <div className="competences-section">

            {/* ── HERO ── */}
            <section className="CompetencesHero">
                <div className="CompetencesHeroBg">
                    <span className="CompetencesHeroBgPill CompetencesHeroBgPill--1">&lt;html&gt;</span>
                    <span className="CompetencesHeroBgPill CompetencesHeroBgPill--2">const</span>
                    <span className="CompetencesHeroBgPill CompetencesHeroBgPill--3">.css {"{}"}</span>
                    <span className="CompetencesHeroBgPill CompetencesHeroBgPill--4">{"{}"}</span>
                    <span className="CompetencesHeroBgPill CompetencesHeroBgPill--5">npm run dev</span>
                    <span className="CompetencesHeroBgPill CompetencesHeroBgPill--6">return ()</span>
                </div>
                <div className="CompetencesHeroInner">
                    <p className="CompetencesHeroLabel">━ Mes Compétences ━</p>
                    <div className="CompetencesHeroTitreWrap">
                        <span className="CompetencesHeroIcone"><i className="fa-solid fa-code" /></span>
                        <h1 className="CompetencesHeroTitre">
                            Des <span className="CompetencesHeroTitreAccent">compétences</span><br />
                            qui font la différence
                        </h1>
                        <span className="CompetencesHeroIcone CompetencesHeroIcone--delayed"><i className="fa-solid fa-laptop-code" /></span>
                    </div>
                    <p className="CompetencesHeroSousTitre">Techniques, transversales et linguistiques</p>
                </div>
            </section>

            {/* ── INFORMATIQUES ── */}
            <section className="competences-section-informatiques">
                <div className="competences-section-header">
                    <div className="competences-section-header-left">
                        <div>
                            <h2 className="competences-titre-section">Compétences Informatiques</h2>
                            <p className="competences-desc-section">Développeuse polyvalente, j'aime créer des interfaces modernes, performantes et intuitives.</p>
                        </div>
                    </div>
                </div>
                <GraphiqueCompetences competences={competences_informatiques} />
            </section>

            {/* ── TRANSVERSALES ── */}
            <section className="competences-section-generales">
                <div className="competences-section-header">
                    <div className="competences-section-header-left">
                        <div>
                            <h2 className="competences-titre-section">Compétences Transversales</h2>
                            <p className="competences-desc-section">Des compétences qui me permettent de m'adapter à tous les projets.</p>
                        </div>
                    </div>
                </div>
                <div className="competences-grille-generale">
                    {competences_transversales.map((competence) => (
                        <CarteCompetenceGenerale key={competence.nom} competence={competence} />
                    ))}
                </div>
            </section>

            {/* ── LINGUISTIQUES ── */}
            <section className="competences-section-langues">
                <div className="competences-section-header">
                    <div className="competences-section-header-left">
                        <div>
                            <h2 className="competences-titre-section">Compétences Linguistiques</h2>
                            <p className="competences-desc-section">Je parle français couramment et je me débrouille bien en anglais. Je continue à améliorer mes compétences.</p>
                        </div>
                    </div>
                </div>
                <div className="competences-grille-skill">
                    {competences_langues.map((competence) => (
                        <CarteCompetence key={competence.nom} competence={competence} />
                    ))}
                </div>
            </section>

            {/* ── STAGE ── */}
            <div className="competences-stage-wrapper">
                <div className="competences-stage-trigger-card" onClick={() => setPopupOuverte(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setPopupOuverte(true)}>
                    <div className="competences-stage-trigger-glow" />
                    <div className="competences-stage-trigger-left">
                        <span className="competences-stage-trigger-badge">
                            <span className="competences-stage-trigger-badge-dot" />
                            Stage BTS 2ème année
                        </span>
                        <h3 className="competences-stage-trigger-title">
                            Compétences acquises <br />
                            <span className="competences-stage-trigger-highlight">en entreprise</span>
                        </h3>
                        <p className="competences-stage-trigger-sub">Découvrez ce que j'ai appris sur le terrain →</p>
                    </div>
                    <div className="competences-stage-trigger-right">
                        <div className="competences-stage-trigger-icon-wrap">
                            <i className="fa-solid fa-briefcase" />
                        </div>
                        <div className="competences-stage-trigger-pills">
                            {competences_stage.map((c) => (
                                <span key={c.titre} className="competences-stage-trigger-pill">
                                    <i className={c.iconeClasse} /> {c.titre}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── POPUP ── */}
            {popupOuverte && (
                <div className="competences-stage-overlay" onClick={() => setPopupOuverte(false)}>
                    <div className="competences-stage-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="competences-stage-popup-header">
                            <div>
                                <p className="competences-stage-popup-badge">
                                    <span className="competences-stage-popup-badge-dot" />
                                    Stage de 2ème année — BTS SIO
                                </p>
                                <h2 className="competences-stage-popup-title">
                                    Ce que le terrain <br />
                                    <span className="competences-stage-popup-highlight">m'a appris</span>
                                </h2>
                                <p className="competences-stage-popup-intro">
                                    Mon stage de 2ème année a été une étape clé dans ma professionnalisation.
                                    Voici les domaines spécifiques sur lesquels j'ai travaillé.
                                </p>
                            </div>
                            <button className="competences-stage-popup-close" onClick={() => setPopupOuverte(false)}>
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>
                        <div className="competences-stage-popup-body">
                            <div className="competences-stage-popup-grille">
                                {competences_stage.map((item) => (
                                    <div key={item.titre} className="competences-stage-popup-carte">
                                        <div className="competences-stage-popup-carte-icone">
                                            <i className={item.iconeClasse} />
                                        </div>
                                        <h3 className="competences-stage-popup-carte-titre">{item.titre}</h3>
                                        <p className="competences-stage-popup-carte-desc">{item.description}</p>
                                        <div className="competences-stage-popup-carte-tags">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="competences-stage-popup-carte-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="competences-stage-popup-footer">
                            <i className="fa-solid fa-circle-info" /> Compétences développées lors de mon stage de 2ème année en entreprise.
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}