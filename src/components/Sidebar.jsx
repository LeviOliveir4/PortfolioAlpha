import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import curriculo from '../pdf/Curriculo2023.pdf';
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
    <a href={curriculo} target='_blank' className="btn" download>
      Download Currículo
    </a>
  </aside>;
};

export default Sidebar