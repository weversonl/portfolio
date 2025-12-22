import type { ReactNode } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useLanguage } from "../contexts/LanguageContext";

interface SocialNetwork {
  name: string;
  icon: ReactNode;
  url: string;
}

const SocialNetworkContainer = () => {
  const { language } = useLanguage();

  const linkedinUrl = language === "en-US"
    ? "https://www.linkedin.com/in/weversonlemos/?locale=en_US"
    : "https://www.linkedin.com/in/weversonlemos/";

  const socialNetworks: SocialNetwork[] = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: linkedinUrl,
    },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/WeversonL" },
    {
      name: "WhatsApp",
      icon: <BsWhatsapp />,
      url: "https://wa.me/5511998634141",
    },
  ];
  return (
    <div className="flex gap-3">
      {socialNetworks.map((network) => (
        <a
          key={network.name}
          href={network.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/40 hover:-translate-y-1"
          aria-label={network.name}
        >
          <span className="text-lg flex items-center justify-center">
            {network.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialNetworkContainer;
