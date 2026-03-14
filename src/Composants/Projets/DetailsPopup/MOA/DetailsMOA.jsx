import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default function DetailsMOA() {

    // Tableau de sections comme pour projetsPro
    const sectionsData = [
        {
            number: '01',
            title: "Page d'accueil",
            text: "La page d’accueil affiche plusieurs messages d’avertissement et d’alerte, donnant l’impression d’accéder à un système interne sécurisé. L’interface présente la documentation comme classée par une fausse administration de sécurité, renforçant l’ambiance confidentielle et mystérieuse du site. On voulait donner l’impression que tout cela était sérieux et secret. Cette page est restée inachevée.",
            image: "src/assets/MOA/ApercuMOA3.png"
        },
        {
            number: '02',
            title: 'Page des entités',
            text: "La page des entités présente des définitions ainsi qu'une liste des entités référencées. On y trouve des informations sur leur origine et la manière dont elles ont été identifiées.",
            image: "src/assets/MOA/ApercuMOA4.png"
        },
        {
            number: '03',
            title: 'Liste des entités',
            text: "Une seule entité avait été élaborée, le reste de la liste restant vide.",
            image: "src/assets/MOA/ApercuMOA5.png"
        },
        {
            number: '04',
            title: 'Fiche descriptive d’une entité - 1',
            text: "Cette page présente un exemple de fiche d’une entité, avec des informations précises sur ses caractéristiques, son origine et la manière dont elle a été identifiée.",
            image: "src/assets/MOA/ApercuMOA6.png"
        },  
        {
            number: '05',
            title: 'Fiche descriptive d’une entité - 2',
            text: "Suite de la page décrite précédemment.",
            image: "src/assets/MOA/ApercuMOA7.png"
        }
    ];

    return (
        <div className="DetProContainer">

            {/* HEADER */}
            <div className="DetProHeader">
                <img
                    src="src/assets/MOA/MOACouverture.png"
                    alt="JPV CHASSEUR"
                    className="DetProHeaderImage"
                />

                <div className="DetProHeaderOverlay">
                    <div className="DetProBadges">
                        <span className="DetProBadgeBlue">Projet fictif collaboratif</span>
                        <span className="DetProBadgeGrey">2023</span>
                    </div>
                    <h1 className="DetProTitlePopup">Metaphysical Occult Agency</h1>
                    <p className="DetProSubtitlePopup">
                          <FontAwesomeIcon icon={faDesktop} className="DetBot-icone" />
                        Site d'archives fictif - INACHEVÉ</p>
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