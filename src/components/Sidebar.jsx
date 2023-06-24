import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../assets/img/eu.png";
import englishPdf from '../assets/files/english-weverson.pdf';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Weverson Lemos" />
      <h1 className="name">Weverson Lemos</h1>
      <p className="title">Desenvolvedor Backend</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={englishPdf} target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
