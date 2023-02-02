import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';
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
    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:04eb185e-7a8b-4298-86af-08ef31803034" className="btn" download="Curriculo">
      Download Currículo
    </a>
  </aside>;
};

export default Sidebar