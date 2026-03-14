import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default function DetailsLiminal() {

    // Tableau de sections comme pour projetsPro
    const sectionsData = [
        {
            number: '01',
            title: 'Page d’avertissement',
            text: "La page d’avertissement cherche à rendre crédible l’accès à une documentation très protégée et confidentielle. On voulait donner l’impression à l’utilisateur qu’il franchissait un seuil sérieux et sécurisé.",
            image: "src/assets/Liminal/ApercuLiminal2.png"
        },
        {
            number: '02',
            title: "Page d'accueil - 1",
            text: "On voulait faire un site complet, avec de nombreux onglets pour donner l’impression à l’utilisateur qu’il explorait un système dense et complexe. La page d’accueil explique brièvement ce qu’est Liminal Factory, tout en plongeant l’utilisateur dans une ambiance sombre qui donne le sentiment d’être dans un endroit qu’il ne faudrait pas visiter. On avait également eu l'idée d'ajouter une vidéo créée par nous-même, pour accentuer à la fois l’étrangeté et la crédibilité du site (mais celle-ci n'a jamais été tournée).",
            image: "src/assets/Liminal/ApercuLiminal1.png"
        },
        {
            number: '03',
            title: "Page d'accueil - 2",
            text: "Suite de la page décrite précédemment.",
            image: "src/assets/Liminal/ApercuLiminal3.png"
        }

    ];

    return (
        <div className="DetProContainer">

            {/* HEADER */}
            <div className="DetProHeader">
                <img
                    src="src/assets/Liminal/LiminalCouverture.png"
                    alt="JPV CHASSEUR"
                    className="DetProHeaderImage"
                />

                <div className="DetProHeaderOverlay">
                    <div className="DetProBadges">
                        <span className="DetProBadgeBlue">Projet fictif collaboratif</span>
                        <span className="DetProBadgeGrey">2024</span>
                    </div>
                    <h1 className="DetProTitlePopup">Liminal Factory</h1>
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