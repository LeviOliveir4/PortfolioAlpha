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
    <a href="https://drive.google.com/file/d/1DzWaAbyGEHX_Zq0XuZSowH8l3dsSPWE2/view?usp=drive_link" className="btn" download="Currículo">
      Download Currículo
    </a>
  </aside>;
};

export default Sidebar