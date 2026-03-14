import { Routes, Route } from "react-router-dom";
import Accueil from './Composants/Accueil/Accueil';
import Navbar from './Composants/Navbar/Navbar';
import Footer from './Composants/Footer/Footer';
import Projets from "./Composants/Projets/Projets";
import Parcours from "./Composants/Parcours/Parcours";
import Competences from "./Composants/Compétences/Competences";
import DetailsBotCenter from "./Composants/Projets/DetailsPopup/Botcenter/DetailsBotcenter";
import DetailsLiminal from "./Composants/Projets/DetailsPopup/Liminal/DetailsLiminal";
import DetailsMOA from "./Composants/Projets/DetailsPopup/MOA/DetailsMOA";
import DetailsMusicvault from "./Composants/Projets/DetailsPopup/Musicvault/DetailsMusicvault";


function App() {

  return (

    <>
      <Navbar></Navbar>



      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Parcours" element={<Parcours />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/DetailsBotCenter" element={<DetailsBotCenter />} />
        <Route path="/DetailsLiminal" element={<DetailsLiminal/>} />
        <Route path="/DetailsMOA" element={<DetailsMOA />} />
        <Route path="/DetailsMusicvault" element={<DetailsMusicvault />} />
      

      </Routes>


      { /* Footer */}
      <Footer></Footer>



    </>



  )
}

export default App
