import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default function DetailsMusicvault() {

    // Tableau de sections comme pour projetsPro
    const sectionsData = [
        {
            number: '01',
            title: 'Page de Connexion',
            text: "Cette page permet aux utilisateurs d’accéder à l’interface MusicVault. L’authentification se fait à l’aide d’un identifiant et d’un mot de passe afin de sécuriser l’accès aux fonctionnalités de l’application.",
            image: "/src/assets/Musicvault/ApercuMV3.png"
        },
        {
            number: '02',
            title: 'Catalogue des Musiques',
            text: "Cette page présente l’ensemble des musiques disponibles sur MusicVault. Connecté en tant qu’administrateur, vous pouvez filtrer et trier les morceaux, créer de nouvelles musiques, modifier ou supprimer des titres existants, et ajouter des morceaux aux playlists. L’interface offre un contrôle complet pour gérer efficacement le catalogue musical.",
            image: "/src/assets/Musicvault/ApercuMV5.png"
        },
        {
            number: '03',
            title: 'Gestion des Playlists',
            text: "Cette page permet de consulter et gérer les playlists sur MusicVault. Les administrateurs peuvent créer de nouveaux utilisateurs, modifier ou supprimer leurs propres playlists. Connecté en tant qu’administrateur, il est également possible de supprimer les playlists des autres utilisateurs, afin d'avoir un contrôle complet sur l’organisation des contenus musicaux.",
            image: "/src/assets/Musicvault/ApercuMV6.png"
        },
        {
            number: '04',
            title: 'Gestion des Utilisateurs',
            text: "Cette page permet de consulter et administrer les utilisateurs de MusicVault. Les administrateurs peuvent créer, modifier ou supprimer des utilisateurs si nécessaire, et gérer leur rôle pour assurer un contrôle complet sur la plateforme.",
            image: "/src/assets/Musicvault/ApercuMV7.png"
        },
        {
            number: '05',
            title: "Exemple : Popup de Création d'une musique",
            text: "Cette section illustre l’interface de création d’une nouvelle musique sur MusicVault. Elle montre la simplicité et l’efficacité du processus de création au sein de la plateforme.",
            image: "/src/assets/Musicvault/ApercuMV8.png"
        },
        {
            number: '06',
            title: 'Musiques contenues dans notre Playlist',
            text: "Cette page affiche toutes les musiques ajoutées dans notre playlist. Elle permet de visualiser chaque morceau présent et de les retirer facilement si nécessaire.",
            image: "/src/assets/Musicvault/ApercuMV11.png"
        },
        {
            number: '07',
            title: 'Catalogue des Musiques (Utilisateur)',
            text: "Cette page affiche le catalogue de musiques pour un utilisateur connecté avec des droits restreints. L’utilisateur peut parcourir, filtrer et trier les morceaux, mais n’a pas la possibilité de créer, modifier ou supprimer des musiques. Cette vue offre un accès sécurisé et limité aux fonctionnalités du catalogue.",
            image: "/src/assets/Musicvault/ApercuMV14.png"
        },
        {
            number: '08',
            title: 'Gestion des Playlists (Utilisateur)',
            text: "Cette page permet à un utilisateur connecté avec des droits restreints de consulter et gérer ses propres playlists. Il peut filtrer, trier, créer, modifier et supprimer ses playlists, mais n’a pas accès aux playlists des autres utilisateurs, lui permettant de ne consulter que son contenu personnel.",
            image: "/src/assets/Musicvault/ApercuMV16.png"
        }
    ];

    return (
        <div className="DetProContainer">

            {/* HEADER */}
            <div className="DetProHeader">
                <img
                    src="src/assets/Musicvault/MusicvaultCouverture.png"
                    alt="JPV CHASSEUR"
                    className="DetProHeaderImage"
                />

                <div className="DetProHeaderOverlay">
                    <div className="DetProBadges">
                        <span className="DetProBadgeBlue">AP 2ÈME ANNÉE</span>
                        <span className="DetProBadgeGrey">2025</span>
                    </div>
                    <h1 className="DetProTitlePopup">Musicvault</h1>
                    <p className="DetProSubtitlePopup">
                          <FontAwesomeIcon icon={faDesktop} className="DetBot-icone" />
                        Panel de gestion fictif</p>
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