import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjetosContainer from "./ProjetosContainer";

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjetosContainer/>
    </main>
  )
}

export default MainContent