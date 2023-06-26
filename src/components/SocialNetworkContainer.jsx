import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs"

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/weversonlemos/" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/WeversonL" },
  { name: "whatsapp", icon: <BsWhatsapp />, url: "https://wa.me/5511998634141" }
];



const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" target="_blank" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
