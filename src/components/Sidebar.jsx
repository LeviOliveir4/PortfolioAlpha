import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
//------------------------------------------------------------//
import Avatar from '../img/pcAndme.jpg'                      //
import '../styles/components/sidebar.sass'                  //
//---------------------------------------------------------//



const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Levi Oliveira" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="https://acrobat.adobe.com/id/urn%3Aaaid%3Asc%3AVA6C2%3A19b79b50-a0f7-46c9-88b6-87758bc6d095/?locale=pt-BR&filetype=application%2Fpdf&viewer%21megaVerb=group-discover" className="btn" download="Curriculo">
      Download Currículo
    </a>
  </aside>;
};

export default Sidebar