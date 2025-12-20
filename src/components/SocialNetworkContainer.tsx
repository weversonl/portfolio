import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs"

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/weversonlemos/" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/WeversonL" },
  { name: "whatsapp", icon: <BsWhatsapp />, url: "https://wa.me/5511998634141" }
];

const SocialNetworkContainer = () => {
  return (
    <section className="flex gap-4 mb-8 w-full justify-center">
      {socialNetworks.map((network) => (
        <a 
          href={network.url} 
          target="_blank"
          rel="noopener noreferrer"
          key={network.name}
          className="social-btn p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/40 hover:-translate-y-1"
          aria-label={network.name}
        >
          <span className="text-xl flex items-center justify-center">
            {network.icon}
          </span>
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
