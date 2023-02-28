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
    <a href="https://onedrive.live.com/?cid=1100C2DF43BF4A8E&id=1100c2df43bf4a8e%21160388&parId=1100c2df43bf4a8e%2116707&o=OneUp" className="btn" download="Currículo">
      Download Currículo
    </a>
  </aside>;
};

export default Sidebar