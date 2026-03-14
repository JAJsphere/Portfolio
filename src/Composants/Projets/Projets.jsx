import "./Projets.css";
import "../Global/GlobalHeader.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFolderOpen, faXmark, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Projets() {

    const [popupProjet, setPopupProjet] = useState(null);
    const [ongletActif, setOngletActif] = useState("apropos");
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = popupProjet ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [popupProjet]);

    const ouvrirPopup = (projet) => {
        setOngletActif("apropos");
        setPopupProjet(projet);
    };

    const projetsPro = [
        {
            image: "https://cdn.prod.website-files.com/657de0bae2fcd55519d3fe50/657de0bae2fcd55519d400e6_Instagram-launches-portfolio-for-creators.webp",
            categorie: "Développement Web",
            titre: "Mon portfolio",
            description: "Le portfolio que vous êtes actuellement en train de découvrir.",
            technos: ["React", "CSS"],
            aProposPopup: `<span class="ProjetBold">Ce portfolio</span> a été initié à l'issue de l'<span class="ProjetBold">épreuve E6 du BTS SIO</span>. Il vise à présenter un <span class="ProjetBold">portfolio cohérent et complet</span>, détaillant mes <span class="ProjetBold">projets</span>, mon <span class="ProjetBold">parcours académique</span>, les <span class="ProjetBold">compétences acquises</span> au cours de ma <span class="ProjetBold">formation</span> et de mes <span class="ProjetBold">stages</span>, ainsi qu'une <span class="ProjetBold">présentation personnelle</span> claire et complète.`,
            detailsTechPopup: `Ce <span class="ProjetBold">portfolio</span> a été développé avec <span class="ProjetBold">React</span> et <span class="ProjetBold">CSS</span> pour offrir une <span class="ProjetBold">approche moderne</span> dans la création d'un <span class="ProjetBold">site Internet</span>. N'étant pas designer, j'ai utilisé l'<span class="ProjetBold">intelligence artificielle</span> pour générer des <span class="ProjetBold">idées de mise en page</span> et m'inspirer de visuels, que j'ai ensuite adaptés et peaufinés pour obtenir un <span class="ProjetBold">design</span> à la fois accessible pour moi, et à mon goût.<br /><br />La réalisation de ce portfolio m'a pris <span class="ProjetBold">plusieurs semaines</span>, en commençant par l'élaboration d'un <span class="ProjetBold">cahier des charges</span> qui m'a permis de <span class="ProjetBold">structurer les informations</span> à intégrer, puis par la <span class="ProjetBold">conception</span> et le <span class="ProjetBold">développement</span> des différentes pages.<br /><br />Ce portfolio regroupe l'<span class="ProjetBold">ensemble des projets marquants</span> que j'ai pu réaliser au cours de ma vie, et met en avant les <span class="ProjetBold">compétences acquises</span> au cours de mes <span class="ProjetBold">deux années de BTS SIO</span>.`,
            badgePopup: "Portfolio",
            badgeAnneePopup: "2026",
            miniDescPopup: "Portfolio moderne",
            boutonDetailsPopup: "Accéder au site en ligne →",
            lienSitePopup: "#",
            apercu1: "src/assets/Portfolio/ApercuPort1.png",
            apercu2: "src/assets/Portfolio/ApercuPort2.png",
            typeLien: "Site"
        },
        {
            image: "/src/assets/JPV/JPVCouverture.png",
            categorie: "Développement Web",
            titre: "JPV Chausseur",
            description: "Site vitrine d'un magasin de chaussures réalisé dans le cadre du stage de 1ère année de BTS SIO option SLAM (Solutions Logicielles et Applications Métiers).",
            technos: ["HTML", "CSS", "JS"],
            aProposPopup: `Mon <span class="ProjetBold">stage de 1ère année de BTS SIO</span> s'est déroulé dans le <span class="ProjetBold">magasin de chaussures de mon grand-père</span>, qui m'a autorisée à <span class="ProjetBold">créer un site Internet vitrine complet</span> pour sa boutique. Comme il n'avait aucune expérience en informatique, j'ai pris en charge la plupart des décisions pour concevoir un site cohérent et professionnel, tout en simplifiant la réflexion pour lui.<br /><br />Le <span class="ProjetBold">principal objectif</span> était de faciliter l'accès aux informations sur la boutique et ses collections afin d'attirer davantage de clients. J'ai participé à <span class="ProjetBold">toutes les étapes du projet</span> : définition du cahier des charges, échanges avec le gérant, prises de photos des modèles phares, choix du design, organisation du contenu, intégration des pages et <span class="ProjetBold">développement en HTML, CSS et JavaScript</span>.<br /><br />Même si le site n'est pas exploitable pour le client aujourd'hui pour des raisons de sécurité, d'hébergement et du manque de connaissances techniques du gérant, ce projet a été <span class="ProjetBold">extrêmement formateur et gratifiant</span>, me permettant de <span class="ProjetBold">gagner en confiance</span> et de comprendre les <span class="ProjetBold">étapes nécessaires à la réalisation d'un site web</span>.`,
            detailsTechPopup: `J'ai commencé par établir un <span class="ProjetBold">cahier des charges</span> pendant <span class="ProjetBold">une semaine</span> pour définir précisément les attentes : pages souhaitées, contenus à mettre en valeur, design, disposition et descriptions. Dès le début, j'ai passé une <span class="ProjetBold">journée complète dans le magasin</span> pour échanger avec lui et <span class="ProjetBold">prendre en photo les modèles phares</span>, afin de présenter sur le site les chaussures les plus attractives pour les clients.<br /><br />Ensuite, j'ai travaillé sur le <span class="ProjetBold">design et la structure du site</span> : organisation des onglets, mise en page des informations, hiérarchisation des contenus et choix esthétiques. N'étant pas designer, j'ai cherché l'inspiration sur des <span class="ProjetBold">sites concurrents</span> pour construire un site attrayant et fonctionnel.<br /><br />Une fois cette <span class="ProjetBold">phase de réflexion</span> terminée, j'ai entamé le <span class="ProjetBold">développement du site</span>. J'ai commencé par la <span class="ProjetBold">page d'accueil</span>, puis développé progressivement les autres pages, revenant parfois sur les précédentes pour ajuster et améliorer la présentation.<br /><br />Pendant le <span class="ProjetBold">stage</span>, j'ai régulièrement présenté mes avancées au <span class="ProjetBold">client</span>, pour recueillir ses retours et ajuster certains éléments.<br /><br />Le site a été réalisé en <span class="ProjetBold">HTML</span>, <span class="ProjetBold">CSS</span> et <span class="ProjetBold">JavaScript</span>. Il s'agit d'un <span class="ProjetBold">site vitrine statique</span> : les données sont en dur et il n'y a pas de traitement d'informations utilisateurs. Le site <span class="ProjetBold">n'est pas responsive</span>, mais il montre les <span class="ProjetBold">fonctionnalités essentielles d'un site vitrine</span>.`,
            badgePopup: "Stage 1ère année",
            badgeAnneePopup: "2025",
            miniDescPopup: "Site vitrine de chaussures",
            boutonDetailsPopup: "Accéder au site en ligne →",
            lienSitePopup: "#",
            apercu1: "/src/assets/JPV/ApercuJPV1.png",
            apercu2: "/src/assets/JPV/ApercuJPV3.png",
            typeLien: "Site"
        },
        {
            image: "src/assets/Botcenter/BotcenterCouverture.png",
            categorie: "Programmation Web",
            titre: "BotCenter (En cours...)",
            description: "Tableau de bord conçu pour gérer un parc de robots fictif réalisé dans le cadre de l'épreuve E5 du BTS SIO option SLAM (Solutions Logicielles et Applications Métiers).",
            technos: ["Angular", "API C#", "SQL", "BDD"],
            aProposPopup: `BotCenter est un <span class="ProjetBold">tableau de bord fictif</span> réalisé dans le cadre de l'<span class="ProjetBold">épreuve E5 du BTS SIO, option SLAM</span>. Cette épreuve demande la réalisation de <span class="ProjetBold">deux projets intégrant des fonctionnalités de gestion de données</span> telles que le <span class="ProjetBold">CRUD</span>, ainsi que des systèmes de <span class="ProjetBold">filtres, de tris et de gestion d'utilisateurs</span>. BotCenter est donc <span class="ProjetBold">l'un des deux projets réalisés</span>.<br /><br />BotCenter est une <span class="ProjetBold">application interne</span> conçue pour l'<span class="ProjetBold">entreprise fictive TechNova</span>, spécialisée dans la <span class="ProjetBold">technologie et l'automatisation</span>. Elle permet de <span class="ProjetBold">centraliser la gestion d'un parc de robots</span> répartis dans différentes zones des locaux de l'entreprise. L'outil offre la possibilité de <span class="ProjetBold">visualiser l'état des robots</span>, <span class="ProjetBold">suivre les maintenances</span>, identifier les <span class="ProjetBold">zones d'affectation</span> et les <span class="ProjetBold">responsables de leur supervision</span>.<br /><br />L'objectif est de fournir une <span class="ProjetBold">interface claire</span> permettant aux <span class="ProjetBold">administrateurs et aux salariés</span> d'avoir une <span class="ProjetBold">vision globale et organisée</span> du fonctionnement du <span class="ProjetBold">parc robotique</span>.`,
            detailsTechPopup: `Le projet est <span class="ProjetBold">actuellement en cours de développement</span> et doit être rendu opérationnel pour l'<span class="ProjetBold">épreuve de fin d'année</span>. Plusieurs étapes importantes ont déjà été réalisées.<br /><br />J'ai commencé par rédiger le <span class="ProjetBold">cahier des charges</span> de l'application, en imaginant d'abord une idée de projet avec un contexte cohérent et réaliste. Une fois le concept défini, j'ai réalisé la conception du <span class="ProjetBold">modèle logique de données (MLD)</span> afin de structurer les tables, les attributs et les relations tout en vérifiant la cohérence globale du système.<br /><br />Après la validation du MLD, j'ai construit la <span class="ProjetBold">base de données avec HeidiSQL</span>. Cette étape m'a ensuite permis de commencer le développement des différentes <span class="ProjetBold">classes en C#</span> pour la partie back-end.<br /><br />J'ai ensuite commencé la conception de l'interface de mon <span class="ProjetBold">tableau de bord avec Angular</span>. Pour cela, j'utilise du <span class="ProjetBold">SCSS</span> et du <span class="ProjetBold">TypeScript</span> afin de construire le design et les fonctionnalités de l'application. Je me suis également inspirée d'outils d'<span class="ProjetBold">intelligence artificielle</span> spécialisés dans la conception d'interfaces afin de trouver des idées de mise en page et reproduire un visuel qui me correspond.<br /><br />Le projet est actuellement <span class="ProjetBold">toujours en développement</span> et devrait être pleinement opérationnel dans les semaines à venir.`,
            badgePopup: "AP 2ème année", badgeAnneePopup: "2026", miniDescPopup: "Tableau de bord fictif",
            boutonDetailsPopup: "Voir plus de détails →", lienSitePopup: "/DetailsBotCenter",
            apercu1: "src/assets/Botcenter/ApercuBot1.png", apercu2: "src/assets/Botcenter/ApercuBot2.png", typeLien: "Composant"
        },
        {
            image: "src/assets/Musicvault/MusicvaultCouverture.png",
            categorie: "Programmation Web",
            titre: "MusicVault (En cours...)",
            description: "Panel de musiques fictif réalisé dans le cadre de l'épreuve E5 du BTS SIO option SLAM (Solutions Logicielles et Applications Métiers).",
            technos: ["React", "API PHP", "SQL", "BDD"],
            aProposPopup: `MusicVault est un projet réalisé dans le cadre de l'épreuve E5 du BTS SIO, option SLAM, qui demande la réalisation de deux projets intégrant des fonctionnalités de gestion de données telles que le <span class="ProjetBold">CRUD</span>, ainsi que des systèmes de <span class="ProjetBold">filtres, tris et gestion d'utilisateurs</span>. MusicVault est donc l'un des deux projets réalisés.<br /><br />MusicVault est une application interne conçue pour l'entreprise <span class="ProjetBold">HarmoniaCorp</span>. Elle permet de centraliser et organiser le <span class="ProjetBold">catalogue musical</span> de l'entreprise, avec la possibilité de classer les morceaux par artiste, album, genre ou date, et de créer des <span class="ProjetBold">playlists personnalisées</span>.<br /><br />L'objectif est de fournir un outil pratique et structuré permettant aux employés de retrouver rapidement les morceaux souhaités et de préparer des playlists pour les événements internes. <span class="ProjetBold">La lecture des fichiers audio n'est pas intégrée</span>, l'application se concentre uniquement sur la gestion des informations musicales.`,
            detailsTechPopup: `Le projet est actuellement en <span class="ProjetBold">cours de développement</span> et doit être rendu opérationnel pour l'<span class="ProjetBold">épreuve de fin d'année</span>. Plusieurs étapes importantes ont déjà été réalisées.<br /><br />J'ai commencé par rédiger le <span class="ProjetBold">cahier des charges</span> de l'application, en imaginant d'abord une idée de projet avec un contexte cohérent et réaliste. Une fois le concept défini, j'ai réalisé la conception du <span class="ProjetBold">modèle logique de données (MLD)</span> afin de structurer les tables, les attributs et les relations tout en vérifiant la cohérence globale du système.<br /><br />Après la validation du MLD, j'ai construit la <span class="ProjetBold">base de données avec HeidiSQL</span>. Cette étape m'a ensuite permis de réaliser le développement des différentes <span class="ProjetBold">classes en PHP</span> pour la partie back-end. J'ai également développé une <span class="ProjetBold">API</span> pour relier le front-end et le back-end.<br /><br />Une fois le back-end opérationnel, je me suis attaquée à l'interface, réalisée en <span class="ProjetBold">REACT (Vite)</span> avec du <span class="ProjetBold">JSX</span> (une extension syntaxique de JavaScript) et du <span class="ProjetBold">CSS</span>. J'ai donc créé plusieurs <span class="ProjetBold">composants</span>, chacun réalisant sa tâche (Navbar, Footer, Pages...).<br /><br />Enfin, j'ai ajouté un <span class="ProjetBold">système de connexion</span> via une page de login utilisant des <span class="ProjetBold">tokens JWT</span>, permettant de mémoriser la session de l'utilisateur qui se connecte.<br /><br />Il me reste maintenant à <span class="ProjetBold">améliorer le code</span> et à <span class="ProjetBold">réaliser des tests</span> pour assurer le bon fonctionnement de l'application.`,
            badgePopup: "AP 2ème année", badgeAnneePopup: "2026", miniDescPopup: "Panel de gestion fictif",
            boutonDetailsPopup: "Voir plus de détails →", lienSitePopup: "/DetailsMusicvault",
            apercu1: "src/assets/Musicvault/ApercuMV1.png", apercu2: "src/assets/Musicvault/ApercuMV2.png", typeLien: "Composant"
        }
    ];

    const projetsPerso = [
        {
            image: "src/assets/NihonJaaj/NihonJaajCouverture.png",
            categorie: "Développement Web",
            titre: "NihonJaaj",
            description: "Un site Internet pour apprendre le Japonais.",
            technos: ["HTML", "CSS", "JS"],
            aProposPopup: `NihonJaaj est un <span class="ProjetBold">projet personnel</span> que j'ai réalisé lorsque j'ai commencé à apprendre le <span class="ProjetBold">japonais</span>. L'objectif de ce site était de <span class="ProjetBold">rendre l'apprentissage du japonais plus accessible</span> en proposant des <span class="ProjetBold">cours</span>, des <span class="ProjetBold">fiches de révision</span>, des <span class="ProjetBold">exercices</span> ainsi que des <span class="ProjetBold">quiz interactifs</span>.<br /><br />Le site n'est actuellement <span class="ProjetBold">pas terminé</span> et son <span class="ProjetBold">développement est en pause</span>. J'ai souvent tendance à entreprendre de <span class="ProjetBold">nouveaux projets</span> pour expérimenter et apprendre, ce qui fait que certains restent inachevés par <span class="ProjetBold">manque de temps</span> sur le long terme. Malgré cela, ce projet reste <span class="ProjetBold">accessible</span> et constitue une <span class="ProjetBold">base intéressante</span> qui pourrait être reprise et développée davantage à l'avenir.`,
            detailsTechPopup: `J'ai réalisé ce <span class="ProjetBold">site internet</span> entièrement en <span class="ProjetBold">HTML, CSS et JavaScript</span>, car je ne maîtrisais pas encore <span class="ProjetBold">React</span> au moment de commencer ce projet. À l'avenir, je prévois probablement de l'adapter avec cette <span class="ProjetBold">technologie</span>. J'ai choisi d'improviser et de créer <span class="ProjetBold">plusieurs onglets</span> en ayant une <span class="ProjetBold">idée globale du projet</span>, sans avoir établi de <span class="ProjetBold">cahier des charges complet</span> au préalable.<br /><br />Pour m'aider dans la création, je me suis appuyée sur <span class="ProjetBold">l'intelligence artificielle</span> afin de trouver de <span class="ProjetBold">l'inspiration pour le design</span> et de gagner en <span class="ProjetBold">efficacité dans l'écriture du code</span>. J'ai ensuite sélectionné les <span class="ProjetBold">éléments intéressants</span> et façonné le <span class="ProjetBold">visuel</span> à ma manière.<br /><br />Le site reste pour le moment <span class="ProjetBold">accessible et fonctionnel</span>, mais dans une <span class="ProjetBold">version limitée</span>. Le projet sera probablement <span class="ProjetBold">repris et développé davantage</span> lorsque le <span class="ProjetBold">temps</span> le permettra.`,
            badgePopup: "Projet personnel", badgeAnneePopup: "2026", miniDescPopup: "Site d'apprentissage du Japonais",
            boutonDetailsPopup: "Accéder au site en ligne →", lienSitePopup: "https://jajsphere.github.io/NihonJaaj/index.html",
            apercu1: "src/assets/NihonJaaj/ApercuNihon1.png", apercu2: "src/assets/NihonJaaj/ApercuNihon2.png", typeLien: "Site"
        },
        {
            image: "src/assets/MOA/MOACouverture.png",
            categorie: "Développement Web",
            titre: "Metaphysical Occult Agency",
            description: "Site d'archives fictif",
            technos: ["HTML", "CSS"],
            aProposPopup: `Metaphysical Occult Agency est un <span class="ProjetBold">site internet fictif</span> que j'ai réalisé en <span class="ProjetBold">duo avec un ami</span>. L'objectif du site était de créer une <span class="ProjetBold">fausse entreprise</span> chargée de <span class="ProjetBold">répertorier des archives secrètes</span> sur des <span class="ProjetBold">entités supposément présentes sur Terre</span> parmi nous. Le projet s'inspire des sites <span class="ProjetBold">"SCP"</span> : des <span class="ProjetBold">archives fictives</span> présentant des <span class="ProjetBold">créatures ou phénomènes imaginaires</span> dans un style à la fois <span class="ProjetBold">effrayant et mystérieux</span>, mêlant <span class="ProjetBold">récits, documents et alertes de sécurité</span>.`,
            detailsTechPopup: `Nous avons commencé ce <span class="ProjetBold">site</span> en <span class="ProjetBold">2023</span>, alors que je découvrais encore les langages <span class="ProjetBold">HTML et CSS</span>, mais j'étais curieuse de créer quelque chose qui nous plaisait avec mon <span class="ProjetBold">ami</span>. J'ai réalisé le <span class="ProjetBold">site moi-même</span>, en m'aidant des quelques conseils disponibles sur des <span class="ProjetBold">forums</span>, car l'<span class="ProjetBold">intelligence artificielle</span> n'était pas encore assez développée à cette époque.<br /><br />Mon ami s'est chargé de l'<span class="ProjetBold">écriture du contenu</span>, en créant les <span class="ProjetBold">histoires des créatures</span>, ainsi que les <span class="ProjetBold">faux messages d'alerte et de sécurité</span> qui donnent vie à l'<span class="ProjetBold">univers du site</span>.<br /><br />Le <span class="ProjetBold">site</span> n'a jamais été <span class="ProjetBold">terminé</span> et n'aboutira probablement jamais, mais il reste notre <span class="ProjetBold">premier projet en duo</span>, un vrai <span class="ProjetBold">terrain d'expérimentation et de créativité partagée</span>.`,
            badgePopup: "Projet fictif collaboratif", badgeAnneePopup: "2023", miniDescPopup: "Site d'archives fictif",
            boutonDetailsPopup: "Voir plus de détails →", lienSitePopup: "/DetailsMOA",
            apercu1: "src/assets/MOA/ApercuMOA2.png", apercu2: "src/assets/MOA/ApercuMOA1.png", typeLien: "Composant"
        },
        {
            image: "src/assets/Liminal/LiminalCouverture.png",
            categorie: "Développement Web",
            titre: "Liminal Factory",
            description: "Site d'archives fictif",
            technos: ["HTML", "CSS"],
            aProposPopup: `Liminal Factory est la <span class="ProjetBold">continuité</span> et une <span class="ProjetBold">version améliorée</span> de Metaphysical Occult Agency (MOA), le <span class="ProjetBold">site d'archives fictif</span> que j'avais créé avec un ami. <span class="ProjetBold">L'objectif de ce site</span> était de se concentrer sur Liminal Factory, une <span class="ProjetBold">entreprise fictive</span> proposant des <span class="ProjetBold">salles avec différents jeux</span> où le but est de réussir à les terminer sans se faire attaquer par les <span class="ProjetBold">entités hantant les lieux</span>. MOA s'occupait de <span class="ProjetBold">diffuser le contenu secret</span> de Liminal Factory, un peu comme une <span class="ProjetBold">organisation secrète</span> enquêtant et documentant ces événements.<br /><br />Le concept s'inspire des <span class="ProjetBold">"Backrooms"</span> – des <span class="ProjetBold">espaces labyrinthiques et inquiétants</span> issus de légendes internet – ainsi que de l'univers des <span class="ProjetBold">"SCP"</span> déjà exploré sur MOA. Nous ne voulions pas effacer l'idée de MOA et avons voulu que ce projet serve de <span class="ProjetBold">prolongement à son univers</span>.`,
            detailsTechPopup: `Après l'abandon du <span class="ProjetBold">premier site</span>, nous avons décidé plusieurs mois plus tard de repartir sur ce projet avec une <span class="ProjetBold">histoire plus précise et originale</span>, motivés à nouveau par notre <span class="ProjetBold">curiosité</span> et notre <span class="ProjetBold">envie de créer</span>.<br /><br />Le site reprend des <span class="ProjetBold">idées similaires</span> à MOA, mais avec des <span class="ProjetBold">designs plus travaillés</span> et de <span class="ProjetBold">nouvelles mécaniques</span> inspirées de sites du même genre. J'ai réalisé tout le <span class="ProjetBold">développement moi-même</span>, alors que je maîtrisais encore peu <span class="ProjetBold">HTML et CSS</span>. À cette époque, je ne pensais pas encore à utiliser des outils d'<span class="ProjetBold">intelligence artificielle</span> comme <span class="ProjetBold">ChatGPT</span>, ce qui rendait l'<span class="ProjetBold">aide externe</span> plus difficile à trouver. Mon ami s'occupait toujours de la <span class="ProjetBold">rédaction du contenu</span> et de la <span class="ProjetBold">recherche de design</span> en s'inspirant d'autres sites existants.<br /><br />Le projet n'a jamais été <span class="ProjetBold">terminé</span>, mais il nous a permis d'<span class="ProjetBold">expérimenter</span> et de nourrir notre <span class="ProjetBold">curiosité</span> en créant de <span class="ProjetBold">nouveaux concepts</span>. Bien que le <span class="ProjetBold">temps</span> et les <span class="ProjetBold">connaissances disponibles</span> n'aient pas suffi pour le finaliser, il est probable qu'un jour une <span class="ProjetBold">idée similaire</span> voie le jour, cette fois avec un <span class="ProjetBold">projet pleinement abouti</span>.`,
            badgePopup: "Projet fictif collaboratif", badgeAnneePopup: "2024", miniDescPopup: "Site d'archives fictif",
            boutonDetailsPopup: "Voir plus de détails →", lienSitePopup: "/DetailsLiminal",
            apercu1: "src/assets/Liminal/ApercuLiminal2.png", apercu2: "src/assets/Liminal/ApercuLiminal1.png", typeLien: "Composant"
        }
    ];

    const CarteProjet = ({ projet, index }) => (
        <div className="ProjetCarte" onClick={() => ouvrirPopup(projet)}>
            <div className="ProjetCarteImage">
                <img src={projet.image} alt={projet.titre} loading="lazy" />
                <div className="ProjetCarteImageOverlay" />
                <span className="ProjetCarteAnnee">{projet.badgeAnneePopup}</span>
                <span className="ProjetCarteBadge">{projet.badgePopup}</span>
            </div>
            <div className="ProjetCarteCorps">
                <p className="ProjetCarteCategorie">
                    <i className="fa-solid fa-folder-open" /> {projet.categorie}
                </p>
                <h3 className="ProjetCarteTitre">{projet.titre}</h3>
                <p className="ProjetCarteDesc">{projet.description}</p>
                <div className="ProjetCarteTechnos">
                    {projet.technos.map((t, i) => <span key={i} className="ProjetCarteTag">{t}</span>)}
                </div>
                <div className="ProjetCarteCta">
                    Voir le projet <i className="fa-solid fa-arrow-right" />
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* ── HEADER ── */}
            <section className="ProjetSectionHeader">

                <div className="ProjetHeaderBg">

                    {/* Ampoule — idée */}
                    <div className="ProjetHeaderDeco ProjetHeaderDeco--1">
                        <div className="ProjetHeaderDecoIcone" style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)" }}>
                            <i className="fa-solid fa-lightbulb" style={{ color: "#d97706" }} />
                        </div>
                        <span className="ProjetHeaderDecoLabel" style={{ color: "#d97706" }}>Idée</span>
                    </div>

                    {/* Crayon — conception */}
                    <div className="ProjetHeaderDeco ProjetHeaderDeco--2">
                        <div className="ProjetHeaderDecoIcone" style={{ background: "linear-gradient(135deg, #dbeafe, #bfdbfe)" }}>
                            <i className="fa-solid fa-pencil" style={{ color: "#2563eb" }} />
                        </div>
                        <span className="ProjetHeaderDecoLabel" style={{ color: "#2563eb" }}>Conception</span>
                    </div>

                    {/* Moniteur — développement */}
                    <div className="ProjetHeaderDeco ProjetHeaderDeco--3">
                        <div className="ProjetHeaderDecoIcone" style={{ background: "linear-gradient(135deg, #dcfce7, #bbf7d0)" }}>
                            <i className="fa-solid fa-desktop" style={{ color: "#16a34a" }} />
                        </div>
                        <span className="ProjetHeaderDecoLabel" style={{ color: "#16a34a" }}>Développement</span>
                    </div>

                    {/* Fusée — mise en prod */}
                    <div className="ProjetHeaderDeco ProjetHeaderDeco--4">
                        <div className="ProjetHeaderDecoIcone" style={{ background: "linear-gradient(135deg, #ede9fe, #ddd6fe)" }}>
                            <i className="fa-solid fa-rocket" style={{ color: "#7c3aed" }} />
                        </div>
                        <span className="ProjetHeaderDecoLabel" style={{ color: "#7c3aed" }}>Mise en prod</span>
                    </div>

                </div>

                <div className="ProjetHeaderInner">
                    <p className="ProjetHeaderLabel">━ Mes réalisations ━</p>
                    <div className="ProjetHeaderTitreWrap">
                        <span className="ProjetHeaderIcone ProjetHeaderIcone--delayed"><i className="fa-solid fa-code" /></span>
                        <h1 className="ProjetHeaderTitre">
                            Des <span className="ProjetHeaderTitreAccent">projets</span><br />
                            qui marquent
                        </h1>
                        <span className="ProjetHeaderIcone ProjetHeaderIcone--delayed"><i className="fa-solid fa-folder-open" /></span>
                    </div>
                    <p className="ProjetHeaderSousTitre">Projets professionnels et personnels</p>
                </div>

            </section>


            {/* ── PROJETS PRO ── */}
            <section className="ProjetSection">
                <div className="ProjetSectionIntro">
                    <div className="ProjetSectionIntroLeft">
                        <span className="ProjetSectionNumero">01</span>
                        <div>
                            <h2 className="ProjetSectionTitre">Projets Professionnels</h2>
                            <p className="ProjetSectionDesc">
                                Voici une sélection de mes <strong>projets professionnels aboutis</strong> (ou presque vu que les AP sont en cours).
                                Ces projets démontrent ma capacité à concevoir des solutions complètes, du frontend au backend.{" "}
                                <strong>Cliquez sur un projet pour découvrir les détails techniques.</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ProjetGrille ProjetGrille--pro">
                    {projetsPro.map((p, i) => <CarteProjet key={i} projet={p} index={i} />)}
                </div>
            </section>

            {/* ── PROJETS PERSO ── */}
            <section className="ProjetSection ProjetSection--gris">
                <div className="ProjetSectionIntro">
                    <div className="ProjetSectionIntroLeft">
                        <span className="ProjetSectionNumero">02</span>
                        <div>
                            <h2 className="ProjetSectionTitre">Projets Personnels & Explorations</h2>
                            <p className="ProjetSectionDesc">
                                Ici, vous trouverez mes projets exploratoires et expériences.{" "}
                                <strong>Aucun de ces projets n'a abouti à une version finalisée,</strong>{" "}
                                mais chacun m'a apporté des connaissances précieuses.{" "}
                                <strong>Cliquez sur un projet pour découvrir les détails.</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ProjetGrille ProjetGrille--perso">
                    {projetsPerso.map((p, i) => <CarteProjet key={i} projet={p} index={i} />)}
                </div>
            </section>

            {/* ── POPUP ── */}
            {popupProjet && (
                <div className="ProjetPopupOverlay" onClick={() => setPopupProjet(null)}>
                    <div className="ProjetPopup" onClick={e => e.stopPropagation()}>

                        {/* Image header */}
                        <div className="ProjetPopupImageWrap">
                            <img src={popupProjet.image} alt={popupProjet.titre} className="ProjetPopupImage" />
                            <div className="ProjetPopupImageOverlay" />
                            <button className="ProjetPopupFermer" onClick={() => setPopupProjet(null)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <div className="ProjetPopupImageInfos">
                                <div className="ProjetPopupBadges">
                                    <span className="ProjetPopupBadgeBleu">{popupProjet.badgePopup}</span>
                                    <span className="ProjetPopupBadgeGris">{popupProjet.badgeAnneePopup}</span>
                                </div>
                                <h2 className="ProjetPopupTitre">{popupProjet.titre}</h2>
                                <p className="ProjetPopupSousTitre">{popupProjet.miniDescPopup}</p>
                            </div>
                        </div>

                        {/* Onglets */}
                        <div className="ProjetPopupOnglets">
                            <button
                                className={`ProjetPopupOnglet ${ongletActif === "apropos" ? "ProjetPopupOnglet--actif" : ""}`}
                                onClick={() => setOngletActif("apropos")}
                            >
                                <FontAwesomeIcon icon={faFolderOpen} /> À propos
                            </button>
                            <button
                                className={`ProjetPopupOnglet ${ongletActif === "technique" ? "ProjetPopupOnglet--actif" : ""}`}
                                onClick={() => setOngletActif("technique")}
                            >
                                <FontAwesomeIcon icon={faDesktop} /> Technique
                            </button>
                            <button
                                className={`ProjetPopupOnglet ${ongletActif === "apercu" ? "ProjetPopupOnglet--actif" : ""}`}
                                onClick={() => setOngletActif("apercu")}
                            >
                                <i className="fa-solid fa-images" /> Aperçus
                            </button>
                        </div>

                        {/* Contenu onglets */}
                        <div className="ProjetPopupCorps">
                            {ongletActif === "apropos" && (
                                <div className="ProjetPopupContenu">
                                    <h3 className="ProjetPopupSectionTitre">À propos de cette mission</h3>
                                    <p className="ProjetPopupTexte" dangerouslySetInnerHTML={{ __html: popupProjet.aProposPopup }} />
                                </div>
                            )}
                            {ongletActif === "technique" && (
                                <div className="ProjetPopupContenu">
                                    <h3 className="ProjetPopupSectionTitre">Détails techniques</h3>
                                    <p className="ProjetPopupTexte" dangerouslySetInnerHTML={{ __html: popupProjet.detailsTechPopup }} />
                                    <div className="ProjetPopupTechnos">
                                        {popupProjet.technos.map((t, i) => (
                                            <span key={i} className="ProjetPopupTag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {ongletActif === "apercu" && (
                                <div className="ProjetPopupContenu">
                                    <h3 className="ProjetPopupSectionTitre">Aperçus du projet</h3>
                                    <div className="ProjetPopupAperçuGrille">
                                        {[popupProjet.apercu1, popupProjet.apercu2].filter(Boolean).map((img, i) => (
                                            <img key={i} src={img} alt={`aperçu ${i + 1}`} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="ProjetPopupPied">
                            {popupProjet.typeLien === "Site" ? (
                                <a href={popupProjet.lienSitePopup} target="_blank" className="ProjetPopupBouton">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    {popupProjet.boutonDetailsPopup}
                                </a>
                            ) : (
                                <button className="ProjetPopupBouton" onClick={() => { navigate(popupProjet.lienSitePopup); setPopupProjet(null); }}>
                                    {popupProjet.boutonDetailsPopup}
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}