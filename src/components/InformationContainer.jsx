import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import {SiMicrosoftoutlook} from "react-icons/si"
import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(83)98773-0177</p>
        </div>
      </div>
      <div className="info-card">
        <SiMicrosoftoutlook id="email-icon" />
        <div className="email">
          <h3>Email</h3>
          <p>levideoliveira3002@outlook.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>João Pessoa/PB</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
