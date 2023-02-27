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
    <a href="https://acrobat.adobe.com/id/urn%3Aaaid%3Asc%3AVA6C2%3A8233509d-0b24-4ef5-88ed-4c3c3d6fc1c0?locale=pt-BR&dropinId=partial-edit&filetype=application%2Fvnd.openxmlformats-officedocument.wordprocessingml.document&viewer%21megaVerb=group-discover" className="btn" download="Currículo">
      Download Currículo
    </a>
  </aside>;
};

export default Sidebar