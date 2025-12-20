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
          className="p-3 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 hover:text-slate-100 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/40 hover:-translate-y-1"
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
