import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'


const socialNetworks = [
  {name:"linkedin",href:"https://www.linkedin.com/in/levi-oliveira-martins-costa-3970b1211/", icon: <FaLinkedinIn/> },
  {name:"github",href:'https://github.com/LeviOliveir4', icon: <FaGithub/> },
  {name:"instagram",href:'https://www.instagram.com/levioliveira_1/', icon: <FaInstagram/> },

    
];

const SocialNetworks = () => {
  return(
   <section id="social-networks">
     {socialNetworks.map((network) =>(
       <a href={network.href} className='social-btn' id={network.name} key={network.name}>
        {network.icon}
       </a>
    ))}
  </section>
  );
};

export default SocialNetworks;