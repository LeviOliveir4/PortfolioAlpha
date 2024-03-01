import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import TechnologiesContainer from './TechnologiesContainer';
import AboutContainer from './AboutContainer';
import ProjetosContainer from './ProjetosContainer';
import Welcome from './Welcome';
import '../styles/components/maincontent.sass';

const MainContent = () => {
  return (
    <Router>
      <main id="main-content">
        <div className="menu-nav">
          <Link to="/"><ImHome/></Link>
          <Link to="/about">Sobre</Link>
          <Link to="/technologies">Tecnologias</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </div>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/technologies" element={<TechnologiesContainer />} />
          <Route path="/projects" element={<ProjetosContainer />} />
          {/* Adicione mais rotas para outras seções conforme necessário */}
        </Routes>
      </main>
    </Router>
  );
};

export default MainContent;
