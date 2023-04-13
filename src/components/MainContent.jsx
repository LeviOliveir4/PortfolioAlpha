import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjetosContainer from "./ProjetosContainer";


import '../styles/components/maincontent.sass'
import Formação from "./Formação";
import Objetivo from "./Objetivo";
import Certificações from "./Certificações";
import Habilidades from "./Habilidades";

const MainContent = () => {
  return (
    <main id='main-content'> 
      <AboutContainer/>
      <Formação/>
      <Objetivo/>
      <Certificações/>
      <Habilidades/>
      <TechnologiesContainer/>
      <ProjetosContainer/>
    </main>
  )
}

export default MainContent