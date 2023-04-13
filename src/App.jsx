import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Name from './components/Name'

import './styles/components/app.sass'

function App() {
   return (    
     <div >
      <Name/>
      <section id="portfolio">
      <Sidebar/>      
      <MainContent/>

      </section>
    </div>
  );
}

export default App
