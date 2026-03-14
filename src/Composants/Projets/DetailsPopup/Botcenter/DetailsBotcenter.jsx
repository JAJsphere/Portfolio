import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default function DetailsBotcenter() {

    // Tableau de sections comme pour projetsPro
    const sectionsData = [
        {
            number: '01',
            title: 'Gestion des Robots',
            text: "Cette page présente l’ensemble des robots détenus par l’entreprise. Chaque robot est affiché avec ses informations essentielles, permettant d’avoir une vue claire et organisée du parc robotique.",
            image: "src/assets/Botcenter/ApercuBot1.png"
        },
        {   
            number: '02',
            title: 'Gestion des Utilisateurs',
            text: "Cette page permet d’administrer les utilisateurs du système. Elle offre la possibilité de consulter les comptes existants et de gérer les informations associées à chaque utilisateur.",
            image: "src/assets/Botcenter/ApercuBot3.png"
        },
        {
            number: '03',
            title: 'Gestion des Zones',
            text: "Cette page présente les différentes zones de l’entreprise dans lesquelles les robots peuvent être affectés. Elle permet d’organiser et de visualiser la répartition des robots selon les espaces de travail.",
            image: "src/assets/Botcenter/ApercuBot4.png"
        },
        {
            number: '04',
            title: 'Gestion des Fonctions',
            text: "Cette page permet de gérer les différentes fonctions attribuées aux robots. Chaque fonction définit le rôle ou la tâche qu’un robot peut exercer au sein de l’entreprise.",
            image: "src/assets/Botcenter/ApercuBot5.png"
        },
        {
            number: '05',
            title: 'Gestion des Maintenances',
            text: "Cette page permet de gérer les opérations de maintenance effectuées sur les robots. Elle offre une vue d’ensemble des interventions afin d’assurer le suivi et le bon fonctionnement du parc robotique.",
            image: "src/assets/Botcenter/ApercuBot6.png"
        }
    ];

    return (
        <div className="DetProContainer">

            {/* HEADER */}
            <div className="DetProHeader">
                <img
                    src="src/assets/Botcenter/BotcenterCouverture.png"
                    alt="JPV CHASSEUR"
                    className="DetProHeaderImage"
                />

                <div className="DetProHeaderOverlay">
                    <div className="DetProBadges">
                        <span className="DetProBadgeBlue">AP 2ÈME ANNÉE</span>
                        <span className="DetProBadgeGrey">2025</span>
                    </div>
                    <h1 className="DetProTitlePopup">Botcenter</h1>
                    <p className="DetProSubtitlePopup">
                        <FontAwesomeIcon icon={faDesktop} className="DetBot-icone" />
                        Panel de gestion fictif - Version Démo</p>
                </div>
            </div>



            {/* SECTIONS */}
            {sectionsData.map((section) => (
                <div className="DetProSection" key={section.number}>
                    <div className="DetProSectionContent">
                        <div className="DetProNumber">{section.number}</div>
                        <h2 className="DetProSectionTitle">{section.title}</h2>
                        <p className="DetProSectionText">{section.text}</p>
                    </div>

                    {section.image && (
                        <img
                            src={section.image}
                            alt={section.title}
                            className="DetProSectionImage"
                        />
                    )}
                </div>
            ))}


        </div>
    );
}   