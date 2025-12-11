import { Routes, Route } from "react-router-dom";
import Accueil from './Composants/Accueil/Accueil'
import Header from './Composants/Header/Header'
import Footer from './Composants/Footer/Footer'


function App() {

  return (

    <>
      <Header></Header>



      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />

      </Routes>


      { /* Footer */}   
      <Footer></Footer>



    </>



  )
}

export default App
